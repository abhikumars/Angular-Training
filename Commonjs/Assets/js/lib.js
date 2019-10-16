var lib = {};

lib.greetings = function() {
    return "Hello !!";
}

lib.f = function(x, y) {
    var a = Array.prototype.slice.call(arguments, 2);
    return (x + y) * a.length;
};

module.exports.lib = lib