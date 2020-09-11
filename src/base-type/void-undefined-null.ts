/*
默认情况下null和undefined是所有类型的子类型。 
就是说你可以把 null和undefined赋值给其他类型的变量
但是当配置了strictNullChecks为true，
只能将null分配给null，undefined可以分配给undefined和void

为什么需要void,看changUndefined这个例子，当undefined在函数内部如果被重写了
那return undefined就会导致问题，所以return void 0是更安全的做法
 */ 
let a:void = undefined
console.log(a);

function changUndefined() {
    const undefined = 123
    return undefined
    // return void 0
}

