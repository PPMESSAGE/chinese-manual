#  邮件消息流程
 PPMESSAGE 可以设置邮件接收的处理流程，通过 PPMESSAGE 可以将网页消息转化为邮件消息发给座席，通过定制消息流程能够将网页消息转换为邮件消息发送给指定的座席，如果是未绑定的访客则会通知所有的座席。
管理者通过[设置-邮件消息流程]进行配置。界面如下。
![](https://upload-images.jianshu.io/upload_images/12406336-ed1444521a26fe2c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

在这里双击添加流程摁钮，添加一个新的邮件流程，按照要求填写流程名称和流程触发时机即可。
新建好的流程会在流程列表中。双击一个流程进行配置。在配置时可以将流程列表框关掉。点击流程列表后方的叉号即可。
首先将开始节点和获取客户节点__拖拽__下来，在开始节点中进行详细配置，节点执行结果选择SECCESS，下一个节点选择获取客户数据节点。然后将逻辑运算节点__拖拽__下来，在获取客户节点中进行详细配置。

![](https://upload-images.jianshu.io/upload_images/12406336-61d1ddc8ea6286a7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

输出变量中必须以 var_ 开头避免与系统内置变量重复。在输入参数中变量分类可以忽略，也能根据需要选择获取的数据比如，这里可以选择标准字段和定制字段俩种，在字段中选择消息内容即可。在连接节点上，节点执行结果选择SUCCESS，下一个几点连接选择逻辑运算。此时界面如下。

![](https://upload-images.jianshu.io/upload_images/12406336-93f866076f5b4455.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

将分配全体座席人员和消息转化以及结束节点都__拖拽__下来。在逻辑运算中进行节点配置。

![](https://upload-images.jianshu.io/upload_images/12406336-ec1d74f8d30d0c26.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

这里的逻辑表达式中变量名必须与获取客户数据输出的变量名相同。在连接中，节点执行结果选择SUCCESS，下一个节点执行结果选则消息转化结果。FALSE节点执行结果，下一个节点选择分配全体座席人员。在分配全体座席人员的节点中，SUCCESS节点执行结果，下一个节点连接选择消息转化，在消息转化节点里。

![](https://upload-images.jianshu.io/upload_images/12406336-bdff43b2a9258d98.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

因为这是邮件消息流程所以输出参数必须为邮件。然后下一个节点连接选择结束节点即可。整个流程如下。

![](https://upload-images.jianshu.io/upload_images/12406336-56dcf2bdce5a17f1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

在配置好流程后请在流程列表中开始流程。这样就能将网页消息转化为邮件消息发给座席人员了。

