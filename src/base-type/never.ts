/*
never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型；
 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。

 一般用来声明一个会抛出异常的函数或者一个无限循环的函数
 */

// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message)
}

// 推断的返回值类型为never
function fail() {
  return error('Something failed')
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
  while (true) {}
}

const b: never = fail()
// const bb:never =infiniteLoop()
