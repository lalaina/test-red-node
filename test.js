module.exports = function(RED) {
    function Amount(n) {
        RED.nodes.createNode(this,n);
        this.amount = n.amount;
    }
    RED.nodes.registerType("amount",Amount);

    function Test(config) {
        RED.nodes.createNode(this,config);
        this.server = RED.nodes.getNode(config.amount);        
        var node = this;
        node.on('input', function(msg) {
            msg.payload = msg.payload.toLowerCase();
            node.send(msg);
        });
    }
    RED.nodes.registerType("test",Test);
}