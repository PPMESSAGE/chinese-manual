# 事件流程
这里的事件流程是指对网页消息产生的事件进行处理，在网页端集成了 PPMESSAGE  后能够对感兴趣的用户事件进行跟踪上报。
首先我们要知道事件的含义，事件是系统本身对用户行为进行跟踪的基本数据，通过管理后台可以自定义事件，每个事件都可能会被访客触发。当事件触发后系统会统计出对应数据，这写数据能够进行访客过滤，创建客户细分。

事件的定义通过管理员在管理后台定义，每个事件在访客浏览网页的时候，由开发者控制产生：

```
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
上述是一个简单的例子，通过JQuery监听网页的点击事件，生成事件，并且放回到 
 window._ppmatc 的队列之中。
这个队列会被 PPMESSAGE 定期检查，如果发现了事件数据对象就会上报给后台系统。
上报的数据结构必须如上述代码，一个 Javascript 对象，并且含有 track_event 成员，在 track_event 里面要指定 event_name, event_uuid, event_data, event_name 和 event_uuid 是从管理后台中获取，event_data 是任意对象，event_timestamp是事件时间生成戳，随机生成。

在 PPMESSAGE 上自定义事件管理者通过[设置-客户管理-访客字段]进入在事件字段中添加新字段，最多可以允许8个自定义事件类型。事件的名字和 UUID 会在前端接口中使用。
将前端的工作完成后，需要进行流程的配置。

所有前端的事件都可以触发后台的事件流程，当然事件流程需要提前配置并且激活。在事件流程的上下文中将包含当前访客的信息和当前事件的信息。

值得注意的是访客信息中含有所有的定制事件，但是当前事件是以单独的变量形式体现:

|名称|	类型|	含义|
|:-|:-:|-:|
|track_event_seq|	integer|	表示当前触发流程的事件序号|
|track_event_uuid|	string|	表示当前触发流程的事件uuid|
|track_event_count|	integer|	表示当前触发流程的事件发生的次数|
|track_event_data|	string|	表示当前触发流程的事件携带的数据|

访客携带所有的事件信息，依然可以通过变量访问，这些事件数据的变量形如：

|名称|	类型|	含义|
|:-|:-:|-:|
|event_count_xxx|	integer|	表示事件发生的次数|
|event_first_time_xxx|	datetime|	表示事件首次发生的时间|
|event_last_time_xxx|	datetime|	表示事件最后一次发生的时间|
|event_last_data_xxx|	string|	表示事件最后一次发生时候携带的数据|

其中 xxx 表示事件序号。
配置流程如下。

首先将开始节点和分支节点拖拽下来，开始节点中节点执行结果选择 SUCCESS 直接连接分支节点。在分支节点中首先字段名称选填事件序号，在下方的选项中输入创建事件字段时分配的序号，本文为1，2，3。然后将逻辑运算节点和运算节点_拖拽_下来。在这里我的事件配置为1，2事件产生时，分支节点的下一连接节点为逻辑运算，事件3产生直接连接结束节点。此时需要拉下俩个座席回复消息。在逻辑运算节点中逻辑表达式根据自己需要填写，我这里是捕捉事件次数当2，3事件发生次数都大于8后给让a座席回复，当2，3事件小于8给座席b回复。事件产生的次数越多，访客转化为商机的概率也越大，需要分类处理。最后俩个座席回复消息节点中 SUCCESS 执行结果句连接结束节点即可。整个流程如下图。

![](https://upload-images.jianshu.io/upload_images/12406336-f02a980aae81d550.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

此时前端的准备和后端的事件流程都配置好了就能按照事件流程正确的处理访客激发的事件了。
