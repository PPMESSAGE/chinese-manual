# 聊天组件高级定制方法
通过编辑‘网页聊天插件’的‘网站插件代码’可以实现对 PPMessage 聊天图标和聊天对话窗口的更多控制。您需要将编辑后的网页插件代码粘贴到您的网站页面<head>与</head>标签之间。

![](https://upload-images.jianshu.io/upload_images/12406336-db2cd13922b39ac8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

让我们把插件代码的格式变的好看些:

```
<script> 
window.ppSettings = {
  app_uuid:'a600998e-efff-11e5-9d9f-02287b8c0ebf'
};
(function(){
  var w=window,d=document;
  function l() {
    var a=d.createElement('script');
    a.type='text/javascript';
    a.async=!0;
    a.charset='utf-8';
    a.src='https://ppmessage.cn/ppcom/assets/pp-library.min.js';
    var b=d.getElementsByTagName('script')[0];
    b.parentNode.insertBefore(a,b)
  }
  l();
})();
</script>
  
```

## 改变聊天按钮的位置
默认情况下聊天按钮的位置在整个网页的右下角，改变聊天按钮的位置需要在 ppSettings 中增加一些控制信息:

```
<script> 
window.ppSettings = {
  app_uuid:'a600998e-efff-11e5-9d9f-02287b8c0ebf',
  view: {
    launcher_is_show: true,
    launcher_bottom_margin: '20px',
    launcher_right_margin: '30px',
    launch_style: {
      mode: 'normal',
      position:'right',
      bottom: 95
    }
  }
};
(function(){
  var w=window,d=document;
  function l() {
    var a=d.createElement('script');
    a.type='text/javascript';
    a.async=!0;
    a.charset='utf-8';
    a.src='https://ppmessage.cn/ppcom/assets/pp-library.min.js';
    var b=d.getElementsByTagName('script')[0];
    b.parentNode.insertBefore(a,b)
  }
  l();
})();
</script>

```

这些控制信息都是默认值，就是说不控制就是这样的。
其中 launcher_bottom_margin 和 launcher_right_margin 是用来控制聊天按钮距离浏览器窗口右边和底边的距离，更改这个大小，看看效果吧。
这是把 launcher_bottom_margin 改成 300px，launcher_right_margin 改成 200px 的效果:

![](https://upload-images.jianshu.io/upload_images/12406336-e06be158a54b50e6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

不过仅仅改这个聊天图标的位置是不够的，PPMessage 还不够聪明，点击聊天图标后，聊天对话窗口还是从默认的右下窗口弹出，这个效果可能不是你想要的:

![](https://upload-images.jianshu.io/upload_images/12406336-d61beafd01bed1e3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

聊天按钮出现在聊天窗口的中央了。 这时候需要继续更改窗口位置。

## 改变聊天窗口的位置
还是刚才的代码，控制聊天窗口位置的是 view.launch_style.position/bottom，分别表示聊天窗口是在浏览器的左侧还是右侧，以及距离浏览器的底边高度。如果应用自定义的 lauch_style，需要将 lauch_style.mode 指定为 custom。应用了自定义的风格，聊天对话的窗口弹出动画方式自动改变。position 可以取的值有 left/right/center； 如果 position 为 right 那么聊天窗口将从浏览器的右侧滑出，如果是 center，那么聊天窗口将从页面中间淡出，并且居于页面中间。

```

window.ppSettings = {
  app_uuid:'a600998e-efff-11e5-9d9f-02287b8c0ebf',
  view: {
    launcher_bottom_margin: '200px',
    launcher_right_margin: '30px',
    launcher_is_show: true,
    launch_style: {
      mode: 'custom',
      position:'right',
      bottom: 295
    }
  }
};
(function(){
  var w=window,d=document;
  function l() {
    var a=d.createElement('script');
    a.type='text/javascript';
    a.async=!0;
    a.charset='utf-8';
    a.src='https://ppmessage.cn/ppcom/assets/pp-library.min.js';
    var b=d.getElementsByTagName('script')[0];
    b.parentNode.insertBefore(a,b)
  }
  l();
})();

```
实验一下吧:

![](https://upload-images.jianshu.io/upload_images/12406336-a584600a7900d1bf.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

还有一个你想改变的，PPMessage 也已经替你想到了，改变聊天按钮的图标。

## 隐藏聊天按钮的图标
隐藏聊天按钮的图标需要一个新的变量，launcher_is_show，赋予它 true 或者 false，即可控制显示聊天按钮或者隐藏聊天按钮，代码再 copy 一遍:

```
window.ppSettings = {
  app_uuid:'a600998e-efff-11e5-9d9f-02287b8c0ebf',
  view: {
    launcher_bottom_margin: '200px',
    launcher_right_margin: '30px',
    launcher_is_show: false,
    launch_style: {
      mode: 'custom',
      position:'right',
      bottom: 295
    }
  }
};
(function(){
  var w=window,d=document;
  function l() {
    var a=d.createElement('script');
    a.type='text/javascript';
    a.async=!0;
    a.charset='utf-8';
    a.src='https://ppmessage.cn/ppcom/assets/pp-library.min.js';
    var b=d.getElementsByTagName('script')[0];
    b.parentNode.insertBefore(a,b)
  }
  l();
})();

```



> 值得注意的是 launcher_is_show 不是必须与 custom mode 一起使用。



下面你一定需要打开关闭聊天窗口的接口了，因为聊天按钮已经被隐藏了，本来打开和关闭聊天窗口是它来完成的。

## 打开、关闭聊天窗口
您可是在网页的其他位置调用 PP.show() 去打开聊天窗口，PP.hide() 去关闭聊天窗口，唯一需要注意的是一定要在 PP 对象已经存在的情况下使用。
执行效果如下:

![](https://upload-images.jianshu.io/upload_images/12406336-a0e5ae13812bcc5e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

开发者可以在处理指定元素的 click、hover 等事件的时机来调用 PP.show() 或者 PP.hide()。如果想了解 PPMessage 的聊天窗口的打开状态可以用 PP.isOpen() 来检查，如果正在使用类似 angularjs 这样的前端框架，可以用 ng-if 来绑定不同的界面操作按钮。
开发者也可以通过 onHide 和 onShow 来响应聊天窗口打开和关闭的事件，通过回调函数来控制自己的界面显示:

```

PP.onHide(function() {
});


PP.onShow(function() {
})

```

