import Replacer from "./Replacer";

class NodeExporterConverter {

    static metrics = `

    # https://github.com/prometheus/node_exporter/issues/830#issuecomment-366907263

    node_bcache_cache_read_races_total{uuid=""},node_bcache_cache_read_races{uuid=""}
    node_boot_time,node_boot_time_seconds
    node_buddyinfo_count{node=""},node_buddyinfo_blocks{node=""}
    node_context_switches,node_context_switches_total
    node_cpu{cpu=""},node_cpu_seconds_total{cpu=""}

    node_disk_bytes_read{device=""},node_disk_read_bytes_total{device=""}
    node_disk_bytes_written{device=""},node_disk_written_bytes_total{device=""}
    node_disk_io_time_ms{device=""},node_disk_io_time_seconds_total{device=""}
    node_disk_io_time_weighted{device=""},node_disk_io_time_weighted_seconds_total{device=""}
    node_disk_reads_completed{device=""},node_disk_reads_completed_total{device=""}
    node_disk_reads_merged{device=""},node_disk_reads_merged_total{device=""}
    node_disk_read_time_ms{device=""},node_disk_read_time_seconds_total{device=""}
    node_disk_writes_completed{device=""},node_disk_writes_completed_total{device=""}
    node_disk_writes_merged{device=""},node_disk_writes_merged_total{device=""}
    node_disk_write_time_ms{device=""},node_disk_write_time_seconds_total{device=""}

    node_forks,node_forks_total
    node_infiniband_port_data_received_bytes{device=""},node_infiniband_port_data_received_bytes_total{device=""}
    node_infiniband_port_data_transmitted_bytes{device=""},node_infiniband_port_data_transmitted_bytes_total{device=""}
    node_interrupts{CPU=""},node_interrupts_total{CPU=""}
    node_intr,node_intr_total

    node_memory_Active,node_memory_Active_bytes
    node_memory_Active_anon,node_memory_Active_anon_bytes
    node_memory_Active_file,node_memory_Active_file_bytes
    node_memory_AnonHugePages,node_memory_AnonHugePages_bytes
    node_memory_AnonPages,node_memory_AnonPages_bytes
    node_memory_Bounce,node_memory_Bounce_bytes
    node_memory_Buffers,node_memory_Buffers_bytes
    node_memory_Cached,node_memory_Cached_bytes
    node_memory_CommitLimit,node_memory_CommitLimit_bytes
    node_memory_Committed_AS,node_memory_Committed_AS_bytes
    node_memory_DirectMap2M,node_memory_DirectMap2M_bytes
    node_memory_DirectMap4k,node_memory_DirectMap4k_bytes
    node_memory_Dirty,node_memory_Dirty_bytes
    node_memory_HardwareCorrupted,node_memory_HardwareCorrupted_bytes
    node_memory_Hugepagesize,node_memory_Hugepagesize_bytes
    node_memory_Inactive,node_memory_Inactive_bytes
    node_memory_Inactive_anon,node_memory_Inactive_anon_bytes
    node_memory_Inactive_file,node_memory_Inactive_file_bytes
    node_memory_KernelStack,node_memory_KernelStack_bytes
    node_memory_Mapped,node_memory_Mapped_bytes
    node_memory_MemFree,node_memory_MemFree_bytes
    node_memory_MemTotal,node_memory_MemTotal_bytes
    node_memory_Mlocked,node_memory_Mlocked_bytes
    node_memory_NFS_Unstable,node_memory_NFS_Unstable_bytes
    node_memory_PageTables,node_memory_PageTables_bytes
    node_memory_Shmem,node_memory_Shmem_bytes
    node_memory_Slab,node_memory_Slab_bytes
    node_memory_SReclaimable,node_memory_SReclaimable_bytes
    node_memory_SUnreclaim,node_memory_SUnreclaim_bytes
    node_memory_SwapCached,node_memory_SwapCached_bytes
    node_memory_SwapFree,node_memory_SwapFree_bytes
    node_memory_SwapTotal,node_memory_SwapTotal_bytes
    node_memory_Unevictable,node_memory_Unevictable_bytes
    node_memory_VmallocChunk,node_memory_VmallocChunk_bytes
    node_memory_VmallocTotal,node_memory_VmallocTotal_bytes
    node_memory_VmallocUsed,node_memory_VmallocUsed_bytes
    node_memory_Writeback,node_memory_Writeback_bytes
    node_memory_WritebackTmp,node_memory_WritebackTmp_bytes

    node_network_receive_bytes{device=""},node_network_receive_bytes_total{device=""}
    node_network_receive_compressed{device=""},node_network_receive_compressed_total{device=""}
    node_network_receive_drop{device=""},node_network_receive_drop_total{device=""}
    node_network_receive_errs{device=""},node_network_receive_errs_total{device=""}
    node_network_receive_fifo{device=""},node_network_receive_fifo_total{device=""}
    node_network_receive_frame{device=""},node_network_receive_frame_total{device=""}
    node_network_receive_multicast{device=""},node_network_receive_multicast_total{device=""}
    node_network_receive_packets{device=""},node_network_receive_packets_total{device=""}
    node_network_transmit_bytes{device=""},node_network_transmit_bytes_total{device=""}
    node_network_transmit_compressed{device=""},node_network_transmit_compressed_total{device=""}
    node_network_transmit_drop{device=""},node_network_transmit_drop_total{device=""}
    node_network_transmit_errs{device=""},node_network_transmit_errs_total{device=""}
    node_network_transmit_fifo{device=""},node_network_transmit_fifo_total{device=""}
    node_network_transmit_frame{device=""},node_network_transmit_frame_total{device=""}
    node_network_transmit_multicast{device=""},node_network_transmit_multicast_total{device=""}
    node_network_transmit_packets{device=""},node_network_transmit_packets_total{device=""}

    node_nfs_net_connections{protocol=""},node_nfs_connections_total
    node_nfs_net_reads{protocol=""},node_nfs_packets_total{protocol=""}
    node_nfs_procedures{procedure=""},node_nfs_requests_total{method=""}
    node_nfs_rpc_authentication_refreshes,node_nfs_rpc_authentication_refreshes_total
    node_nfs_rpc_operations,node_nfs_rpcs_total
    node_nfs_rpc_retransmissions,node_nfs_rpc_retransmissions_total

    # https://github.com/prometheus/node_exporter/issues/830#issuecomment-376155612
    node_filesystem_avail,node_filesystem_avail_bytes
    node_filesystem_free,node_filesystem_free_bytes
    node_filesystem_size,node_filesystem_size_bytes

    # Others
    node_memory_MemAvailable,node_memory_MemAvailable_bytes

`
        .split('\n')
        .map((s) => s.trim())
        .filter((s) => s != "")
        .filter((s) => !s.startsWith("#"))
        .map((s) => s.replace(RegExp("\\{.*?}", "g"), ""))
        .map((s) => s.split(","))

    static convert(json: string) {

        this.metrics.forEach((pair) => {
            let from = pair[0]
            let to = pair[1]

            json = Replacer.replace(json, from ,to)
        })

        return json
    }

}

export default NodeExporterConverter