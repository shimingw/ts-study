/**
 * 枚举类型
 * 默认从0开始递增code值
 * 如果你定义了部分属性的code值，则后面未定义的默认为前一位code+1
 * 如果code值重复，则后定义的code值会覆盖先定义的code值
 * 可以用code值查找对应的name
 * 可以用name查找对应的code值
 * 用枚举值来定义一些需要展示的状态码时十分便利
 */
enum Color {
  Red = 1,
  Green,
  Blue = 2,
}

console.log(Color)

let c: number = Color.Green

console.log(c)

