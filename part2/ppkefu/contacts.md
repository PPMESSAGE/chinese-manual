#  邮件消息流程
一般的来说，集成邮件发送还是比较简单的，集成收邮件稍微有点复杂。这也是为什么很多系统都是能够给客户发送邮件，但是标题上都写着**不要回复**，因为你回复他们也收不到，或者收到了也没有办法分配到人去处理。

PPMESSAGE 提供了邮件系统集成，目前支持 [MAILGUN](https://www.mailgun.com/) 的邮件服务，如果您已经注册了 MAILGUN 的邮件服务，MAILGUN的免费额度非常大，一个月一万封，这些足够了。
果真，收到了邮件！直接回复试试看，PPMESSAGE 根据客户消息的的来源，决定如何给客户返回消息，这样客户就通过邮件收到了客服人员在 PPMESSAGE 中直接回复的消息。

这里面还有一个需要设置的地方就是，在 PPMESSAGE 后台，设置 - 客户管理 - 客户离线消息处理，这里面的 EMAIL 设置：

![image](http://upload-images.jianshu.io/upload_images/12406336-0a9475bedb1d34d9?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

在这里可以配置给客服发送邮件的来源地址，可以是座席自己的，也可以是整个团队公用的。一般来说应该用团队公用的，并且这个邮件地址应该和上文中 MAILGUN ROUTES 中所使用的邮件地址一样。这里短信消息还需要流程支持。流程配置如下。
管理者通过[设置-邮件消息流程]进行配置。界面如下。

![](https://upload-images.jianshu.io/upload_images/12406336-ed1444521a26fe2c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

在这里双击添加流程按钮，添加一个新的邮件流程，按照要求填写流程名称和流程触发时机即可。
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

配置好流程，集成完了邮件系统就能将访客信息通过邮件发送给座席人员了。
