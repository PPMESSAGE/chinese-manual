# 设置应用中要跟踪的事件
PPMessage的事件跟踪功能将用户的基本信息和他们的行为结合起来，使您可以发送具有高度针对性，相关性和吸引力的消息。 
事件是系统对用户行为进行跟踪的基本数据，通过管理员在管理后台定义，每个事件在访客浏览网页的时候，由开发者控制产生。PPMessage可以跟踪事件的次数，首次创建时间，最后创建时间，最后更新数据，这些数据可以用来进行访客过滤和创建客户细分。
本文演示了一个 ‘click’ 事件，能够收集客户在网页上的所有的鼠标点击事件，可以做出点击的“热力图”。

## 自定义事件
访问 “设置-客户管理-访客字段”，点击添加新的事件。

![](https://upload-images.jianshu.io/upload_images/12406336-1efeaf11f49a0c84.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

PPMessage目前最多允许 8个自定义事件类型。创建完成后，事件字段列表中会出现一个新的事件字段。

![](https://upload-images.jianshu.io/upload_images/12406336-d04199e6142edf60.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 跟踪事件
为了跟踪网页上的点击事件，您需要在网页聊天插件代码中添加如下内容

```
$(document).on("click", function(event) {

if (!window._ppmatc) {
  window._ppmatc = [];
}

window._ppmatc.push({
  track_event: {
    event_name: "click",
    event_uuid: "xxxx-xxxx-xxxx-xxxxx",
    event_data: {
      x: event.pageX,
      y: event.pageY,
      page_url: window.location.href
    }，
    event_timestamp: Math.round(new Date().getTime()/1000)    
  }
});

});

```

其中 window._ppmatc 这个队列会被 PPMessage 定期检查，如果发现有事件数据对象就会上报给后台系统。
上报的数据结构必须如上述代码所描述，是一个 Javascript 对象，并且含有 track_event 成员，在track_event 里面要指定 event_name, event_uuid, event_data。其中event_name 和 event_uuid 要与您在“设置-客户管理-访客字段”配置的字段信息一致，event_data 可以是任意数据对象。

