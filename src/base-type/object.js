/*
 */

Object.setPrototypeOf = function setPrototypeOf (obj, proto) {
    debugger
    if(obj.__proto__) {
        obj.__proto__ = proto;
        return obj;
    } else {
        // 如果你想返回 prototype of Object.create(null):
        var Fn = function() {
            for (var key in obj) {
                Object.defineProperty(this, key, {
                    value: obj[key],
                });
            }
        };
        Fn.prototype = proto;
        return new Fn();
    }
}

function fn() {}
fn.prototype.sayName = () => {}
const instanceFn = new fn()

function child(){}

// console.log(Object.setPrototypeOf({}, instanceFn))
// console.log(Object.setPrototypeOf({}, fn))
// console.dir(Object.setPrototypeOf(child, fn))
console.dir(Object.setPrototypeOf(Object.create(null), fn))
// console.dir(child);
