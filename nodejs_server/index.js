var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};//定义handle为一个字典
handle["/"] = requestHandlers.start;//其实这个就是为键值对
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle);