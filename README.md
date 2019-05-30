# JavaScript-学习笔记
##字符串String类型
1. String类型用于表示由零或者多个16位Inicode字符组成的字符序列
2. 转义序列，算一个字符，如\n,\',\xnn,\unnn
3. 字符串的连接操作，实际上是创建一个新的字符串，然后销毁之前旧的字符串
4. 除了null和undefined外，其他类型都有toString方法，可转换成字符串类型
5. number类型使用toString时可以添加数字，表示转换成多少进制的格式字符串
```
var num = 10
num.toString(2) // '1010'
```
6. String()是转类型函数，其实原理是如果使用该函数的值可以使用toString函数的话，就调用它；如果值是null或者undefined的话，则对应返回‘null’，‘undefined’

## 函数 Function类型
1. 函数是对象，函数名是指针
```
function sum () {
    console.log(123)
}
var copySum = sum
sum = null
copySum() // 123
```

2. js中函数没有重载
```
function count(){
    console.log(1)
}
function count(){
    console.log(2)
}
count() // 2
// 以上代码不是重载 相当于如下代码
var count = function(){
    console.log(1)
}
count = function() {
    console.log(2)
}
// 其实就是改变了count的值
```
3. 解析器会率先读取函数声明(函数声明提升)，使其在读取任何代码之前可以使用（可访问）；至于函数表达式，只有载解析器执行到它所在的代码行，才会正在被解析执行
```
alert(sum)
function sum(){
    return 111
}
```
4. 在ECMAScript中函数名本身就是变量，
5. 函数的内部属性this，argument；arguments表示函数的入参，callee是arguments上的属性，它是一个指针，指向拥有这个arguments对象的函数；caller是callee的属性，保存着调用当前函数的函数的引用，如果是在全局作用域中调用，则caller为null；this引用的是函数执行的环境对象（上下文）


## 函数命名
1. 函数只做事情不反回数据，使用动词命名
2. 函数只返回数据，使用名次命名
3. 既做事情又返回数据，使用动词+名词命名
事例：
```
var square = function(arr) {
    return arr
}

var push1 = function(arr) {
    arr.push('1212')
}

var cloneArray = function(arr) {
    var clone = arr.slice(0)
    return clone
}
```

## 抽象化编程, 封装功能, 组织代码结构
以实现扫雷游戏为例子：
```
// todo
```
