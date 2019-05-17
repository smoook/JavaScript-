# JavaScript-学习笔记
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
