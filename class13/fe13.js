// 2016/12/20
//
// 此为第 13 课的上课内容
//
// 今天的内容是
//
// HTML5 新增特性
// 移动页面开发
//


HTML5 新内容主要是以下几点

语义化标签如 article、footer、header、nav、section
视频和音频标签 video 和 audio
本地离线存储 localStorage 和 sessionStorage
新增表单特性如新控件 calendar email color 等
用于绘图的 canvas 标签(用于游戏等)
用于高性能图形的 WebGL(用于游戏等, 这个是专用领域的知识, 我们不会直接接触)



HTML5 语义化

原来的标签
<div id="wrapper">
    <div id="header"></div>
    <div id="main">
        <div id="sidebar"></div>
        <div id="content"></div>
    </div>
    <div id="footer"></div>
</div>


完整的 html5 语义化标签是这样的
<!DOCTYPE html>
<html>
    <head>
        <title>标题</title>
    </head>
    <body>
        <header></header>
        <nav>导航</nav>
        <article>
            <section>区块</section>
        </article>
        <aside>侧栏</aside>
        <footer>页脚</footer>
    </body>
</html>


<div class='article'>
<div class='title'>
  前端掏粪指南
</div>
<div class='content'>
前端掏粪指南
前端掏粪指南
前端掏粪指南
前端掏粪指南
前端掏粪指南
前端掏粪指南
前端掏粪指南
</div>
</div>

<div class='article'>
<h1 class='title'>
  前端掏粪指南
</h1>
<p class='content'>
前端掏粪指南
前端掏粪指南
前端掏粪指南
前端掏粪指南
前端掏粪指南
前端掏粪指南
前端掏粪指南
</p>
<gua></gua>
</div>

gua {
  display: inline-block;
  width: 42px;
  height: 42px;
  background: url('gua.png');
}



视频和音频标签和配套的 JS API 是新加入的功能
以前的话只能依赖 flash, 现在有 video 和 audio

带控制器的视频标签, 不同浏览器有不同的文件格式要求
所以用 2 个 source 标签指定不同的视频格式
<video width="300" height="200" controls="controls">
    <source src="movie.mp4">
    <source src="movie.ogv">
</video>


带控制器的音频标签, 不同浏览器有不同的文件格式要求
所以用 2 个 source 标签指定不同的音频格式
<audio id='id-audio-player' controls="controls">
  <source src="audio.ogg">
  <source src="audio.mp3">
</audio >


audio 基本操作如下
var a = document.querySelector('#id-audio-player')
a.play()
a.pause()
a.autoplay
a.src
a.volume
a.duration
a.currentTime = 1

官方文档如下(文档永远是这样的)
https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API





HTML5 提供两种存储方法 localStorage 与 sessionStorage
localStorage 与 sessionStorage 都是用来存储数据的
使用方式一样, 区别只在于过期时间
localStorage 没有过期时间, 要用 clear remove 主动删除数据
sessionStorage 的数据在用户关闭浏览器后将被删除

由于之前有使用, 这里就不讲了





新增表单特性如控件 calendar email color 等
<input type='calendar'>


boolean 值的属性只要写了属性就是 true

false
<input type="checkbox">

true
<input type="checkbox" checked>
<input type="checkbox" checked="checked">
<input type="checkbox" checked="">
<input type="checkbox" checked="false">






用于绘图的 canvas 标签(用于游戏等)
canvas 标签提供一块画布, 可以访问画布中的像素点
主要用途是游戏或者是高级复杂的图形效果
例如 particles.js phaser.js 这些库, 例子如下
https://phaser.io/examples/v2/weapon/fire-rate









移动网页
手机网页和电脑网页的技术是一样的
区别仅在屏幕尺寸和交互方式
下面只列出手机页面开发中重要的点



1 设置 viewport
viewport 是 html 的父元素
在手机上需要用下面的语句设置它的尺寸
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

属性解释
width=device-width      宽度等于设备宽度
height=device-height    高度等于设备高度
initial-scale           初始缩放比例
minimum-scale           允许用户缩放的最小比例
maximum-scale           允许用户缩放的最大比例
user-scalable           是否允许用户缩放



2 调试页面
可以用 chrome 的开发工具调试手机页面
但是由于浏览器兼容性问题, 最终的外观
得用手机真机来检验
标签/css 的兼容性问题有很多网站可以查询
caniuse.com


3 媒体查询
媒体查询实际上是用来做响应式设计的
响应式设计就是一套 CSS 根据当前的分辨率选择不同的样式
现在已经没有前几年那么热门了, 不过我们还是过一遍

媒体查询主要用来:
- 检测媒体的类型, 比如 screen, tv等
- 检测布局视口的特性, 比如视口的宽高分辨率等

用法
@media all and (min-width: 200px) and (max-width: 300px){
    body {
        background: red;
    }
}
上面代码中, all 是媒体类型, 代表任何设备
and 是逻辑操作
意思是, 对于任何设备, 在宽度在 200-300 的范围内应用这个样式



4 Hybrid App(混合开发)
混合开发说的是, 你写的网页运行在手机程序里
本来网页能提供的功能是有限的
但是应用程序可以给页面添加函数
在这种情况下, js 就可以调用别人提供的功能
这就是混合开发的基础

比如你 js 不能实现让手机震动的功能
但是别的程序能实现这个功能, 并且把这个功能
注册为你网页中的一个 js 函数
这样 js 也就拥有这个功能了
然后你调用 vfds() 就让手机震动了

这样的效果就是原生代码(相对于 js 而言的
官方开发语言)实现功能并且提供 js 函数
js 代码用别人提供的功能写逻辑

说穿了就这么一回事, 无任何难度的普通掏粪而已
