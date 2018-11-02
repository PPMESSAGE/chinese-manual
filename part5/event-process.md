# 事件流程
所有前端的事件都可以触发后台的事件流程，当然事件流程需要提前配置并且激活。在事件流程的上下文中将包含当前访客的信息和当前事件的信息。

值得注意的是访客信息中含有所有的定制事件，但是当前事件是以单独的变量形式体现:
track_event_seq	integer	表示当前触发流程的事件序号

track_event_uuid	string	表示当前触发流程的事件uuid

track_event_count	integer	表示当前触发流程的事件发生的次数

track_event_data	string	表示当前触发流程的事件携带的数据

访客携带所有的事件信息，依然可以通过变量访问，这些事件数据的变量形如:

|名称 | 类型| 含义|
|:---|:---:|---:|
|event_count_xxx|integer|表示事件发生的次数|
|event_first_time_xxx|datetime|表示事件首次发生的时间|
|event_last_time_xxx|datetime|表示事件最后一次发生的时间|
|event_last_data_xxx|string|表示事件最后一次发生时候携带的数据|

其中 xxx 表示事件序号。
一个配置好的流程如下:

![](https://upload-images.jianshu.io/upload_images/12406336-8de5f2b4af9b4d97.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

在 PPMESSAGE 中，事件流程能够处理所有事件，换句话说任何事件的发生都会触发事件流程。事件的流程的信息上下文是围绕当前访客和当前激发流程的事件。

上图的事件处理流程描述了一种通用的场景，根据事件的序号进行分支（分支节点），然后再判断时间的发生的次数（逻辑运算节点），再执行具体的操作，这里面是回复一个座席消息给访客，当然还可以对访客进行转化。

事件流程执行的操作对外就是发送消息，对内就是操作访客数据，一般来说就是进行客户转化或者生成工单进一步对客户处理。
