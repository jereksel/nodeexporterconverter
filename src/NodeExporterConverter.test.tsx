import NodeExporterConverter from './NodeExporterConverter';

it('Converter test', () => {

    let text = `
        {command: "node_network_transmit_fifo{ip="my_ip}}

        {command: "node_network_transmit_fifo_total{ip="my_ip}}

        {command: "node_filesystem_avail{ip="my_ip}}

        {command: "node_filesystem_avail_bytes{ip="my_ip}}
`;

    let expected = `
        {command: "node_network_transmit_fifo_total{ip="my_ip}}

        {command: "node_network_transmit_fifo_total{ip="my_ip}}

        {command: "node_filesystem_avail_bytes{ip="my_ip}}

        {command: "node_filesystem_avail_bytes{ip="my_ip}}
`;

    let actual = NodeExporterConverter.convert(text);

    expect(actual).toBe(expected);

});