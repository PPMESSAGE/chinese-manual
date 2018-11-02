# 事件字段变量
打开 “设置 – 客户管理 - 访客字段”，可以自定义事件字段，自定义事件字段可以含有一个事件发生的次数，首次发生事件的时间，最后一次发生事件的时间，以及最后一次事件发生时候携带的数据。
在后台流程中可以引用或者读取这些变量，其命名规则为 event_count_SEQ，event_first_time_SEQ， event_last_time_SEQ， event_last_data_SEQ。其中 SEQ 是序列号。

![](https://upload-images.jianshu.io/upload_images/12406336-f2e8d2025f73bc52.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

上图中定义了一个网页上的点击事件，为了跟踪这个事件，您需要在网页聊天插件代码中添加如下内容:

```
$(document).on("click", function(event) {
if (!window._ppmatc) {
  window._ppmatc = [ ];
}
window._ppmatc.push({
  track_event: {
    event_name: "webclick",
    event_uuid: "0fc050ec-cb6f-11e8-b697-00163e0c79f6 ",
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

因为这个事件字段在系统中的序号是1，在后台流程中可以通过 event_count_1，event_first_time_1， event_last_time_1， event_last_data_1来引用这些变量。
event_count_1是webclick事件发生的次数，event_first_time_1是webclick事件首次发生的时间，event_last_time_1是webclick事件最后一次发生的时间，event_last_data_1是webclick事假最后一次发生时携带的数据。
