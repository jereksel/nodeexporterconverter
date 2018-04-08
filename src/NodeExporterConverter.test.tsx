import NodeExporterConverter from './NodeExporterConverter';

it('Converter test', () => {

    let text = `

        "expr": "(((count(count(node_cpu_seconds_total_second{instance=~\"$node:$port\",job=~\"$job\"}) by (cpu))) - avg(sum by (mode)(irate(node_cpu_seconds_total{mode='idle',instance=~\"$node:$port\",job=~\"$job\"}[5m])))) * 100) / count(count(node_cpu{instance=~\"$node:$port\",job=~\"$job\"}) by (cpu))",

        avg(node_load1{instance=~"$node:$port",job=~"$job"}) /  count(count(node_cpu{instance=~"$node:$port",job=~"$job"}) by (cpu)) * 100

        {command: "node_network_transmit_fifo{ip="my_ip}}
        {command: "node_network_transmit_fifo{ip="my_ip}}
        {command: "node_network_transmit_fifo{ip="my_ip}}

        {command: "node_network_transmit_fifo_total{ip="my_ip}}
        {command: "node_network_transmit_fifo_total{ip="my_ip}}
        {command: "node_network_transmit_fifo_total{ip="my_ip}}

        {command: "node_filesystem_avail{ip="my_ip}}

        {command: "node_filesystem_avail_bytes{ip="my_ip}}
`;

    let expected = `

        "expr": "(((count(count(node_cpu_seconds_total_second{instance=~\"$node:$port\",job=~\"$job\"}) by (cpu))) - avg(sum by (mode)(irate(node_cpu_seconds_total{mode='idle',instance=~\"$node:$port\",job=~\"$job\"}[5m])))) * 100) / count(count(node_cpu_seconds_total{instance=~\"$node:$port\",job=~\"$job\"}) by (cpu))",

        avg(node_load1{instance=~"$node:$port",job=~"$job"}) /  count(count(node_cpu_seconds_total{instance=~"$node:$port",job=~"$job"}) by (cpu)) * 100

        {command: "node_network_transmit_fifo_total{ip="my_ip}}
        {command: "node_network_transmit_fifo_total{ip="my_ip}}
        {command: "node_network_transmit_fifo_total{ip="my_ip}}

        {command: "node_network_transmit_fifo_total{ip="my_ip}}
        {command: "node_network_transmit_fifo_total{ip="my_ip}}
        {command: "node_network_transmit_fifo_total{ip="my_ip}}

        {command: "node_filesystem_avail_bytes{ip="my_ip}}

        {command: "node_filesystem_avail_bytes{ip="my_ip}}
`;

    let actual = NodeExporterConverter.convert(text);

    expect(actual).toBe(expected);

});