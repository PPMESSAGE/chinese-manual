# 定制字段变量
打开 “设置 – 客户管理 - 访客字段”，可以添加定制字段。

![](https://upload-images.jianshu.io/upload_images/12406336-fff79a0638ee63fa.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

例如，上图中定制了一个名称为“微信号码”的定制字段，其 UUID 为

>dc64606e-cb94-11e8-b697-00163e0c79f6,

内部名称为 extra_field_TEXT_1， TEXT 表示这是一个文本字段，1表示是第一个定制的文本字段 。
在访客端的 Javascript 中可以对这个字段进行赋值，也可以在流程中引用这个变量，赋值的时候使用的字段名称形如：extra_field_TEXT_1。
