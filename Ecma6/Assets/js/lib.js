export function greetings() {
    return "Hello !!";
}

export function f(x, y) {
    var a = Array.prototype.slice.call(arguments, 2);
    return (x + y) * a.length;
};