function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; };
    return _setPrototypeOf(o, p);
}
var superClass = function(){
    console.log('function superClass...');
}
superClass.hello = function(){
    console.log('super function hello');
}
var subClass = function(){
    console.log('function subclass');
}
_inherits(subClass,superClass);
console.log(subClass.hello())