module.exports = function(RED) {
    function Test(config) {
        RED.nodes.createNode(this,config);
        this.server = RED.nodes.getNode(config.amount);        
        var node = this;
        node.on('input', function(msg) {
            msg.payload = msg.payload.toLowerCase();
            node.send(msg);
        });
    }
    RED.nodes.registerType("node-tester",Test);
}