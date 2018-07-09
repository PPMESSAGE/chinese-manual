# 邮件集成
一般的来说，集成邮件发送还是比较简单的，集成收邮件稍微有点复杂。这也是为什么很多系统都是能够给客户发送邮件，但是标题上都写着**不要回复**，因为你回复他们也收不到，或者收到了也没有办法分配到人去处理。

PPMESSAGE 提供了邮件系统集成，目前支持 [MAILGUN](https://www.mailgun.com/) 的邮件服务，如果您已经注册了 MAILGUN 的邮件服务，MAILGUN的免费额度非常大，一个月一万封，对那些不是不正经的业务来说，这些足够了。

> PPMESSAGE 的机制可以支持任何第三方邮件系统，但是目前在国内并没有找到同时支持邮件发送和接收的服务，所以 MAILGUN 几乎是唯一的选择了。有很多朋友反馈 QQ 邮箱封了 MAILGUN 的 IP，以 PPMESSAGE 团队测试的结果来看，QQ 邮箱并没有封 MAILGUN 的 IP，只是 QQ 邮箱的安全策略会对高频的邮件请求的 IP 有限制，并不是固定的封锁了 MAILGUN 的 IP，通过 MAILGUN 发送的邮件也都送达了，只是如果 QQ 邮箱 BLOCK 之后，MAILGUN 会延迟一会儿再投递。

![image](http://upload-images.jianshu.io/upload_images/12406336-df18a19fdfe096da?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

在拥有了 MAILGUN 之后，需要在 MAILGUN 里面定义 DOMAIN，并且要按照MAILGUN的说明去配置 DNS。

![m g1.png](http://upload-images.jianshu.io/upload_images/12406336-d9427943670aeb53?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

上图是 [ppmessage.cn](https://mg.ppmessage.cn/) 的配置，目的是创建一个 mg.ppmessage.cn 的二级域名，因为 ppmessage.cn 已经有一个 MX 记录指向了 QQ 邮箱。

> 经常有人说 QQ 邮箱屏蔽了 MAILGUN，可能不是屏蔽了 MAILGUN，MX记录配置错误了也会导致拒收。（在同一个域名级别下配置了 MAILGUN 和 QQ 的邮件服务器）
> 
> 当然也有 IP FREQUENCY LIMIT 的问题，我们又能又什么办法呢。只有等，无尽的等。最后还是能收到的。

严格按照 MAILGUN 的要求进行配置后，MAILGUN 也提供了检查工具，如果检查工具通过了，State 就是 Active 状态。

![image](http://upload-images.jianshu.io/upload_images/12406336-7e8bee0eee7cd6c7?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

配置这些后，回到 PPMESSAGE 的管理后台：设置 - 第三方服务 - 邮件服务

![ppme1.png](http://upload-images.jianshu.io/upload_images/12406336-e218017919cd7808?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

创建一个新的邮件服务，把 MAILGUN 的 API KEY 和 DOMAIN 填好，并且激活，激活的服务配置在左侧有个垂直的蓝色标志。

ENABLE INBOUND EMAIL （允许收邮件） 把蓝色的部分复制下来，再回到 MAILGUN 的配置界面，为收邮件配置一条路由规则，这样 PPMESSAGE 就可以通过 MAILGUN 收邮件。

在 MAILGUN 的主配置菜单中选择 Routes，添加一条规则，这里面是指所有发往 support@mg.ppmessage.cn 的邮件都转发转到那个刚刚复制下来的 URL 服务中。

![屏幕快照 2017-05-02 下午8.42.58.png](http://upload-images.jianshu.io/upload_images/12406336-2d7c802e38daa373?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

现在可以测试一下，给 support@mg.ppmessage.cn 发一封邮件，看看 PPMESSAGE 的座席收到了邮件没有，邮件发过来一般需要20秒。

![image](http://upload-images.jianshu.io/upload_images/12406336-969bbdfe110a0e74?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

果真，收到了邮件！直接回复试试看，PPMESSAGE 根据客户消息的的来源，决定如何给客户返回消息，这样客户就通过邮件收到了客服人员在 PPMESSAGE 中直接回复的消息。

这里面还有一个需要设置的地方就是，在 PPMESSAGE 后台，设置 - 客户管理 - 客户离线消息处理，这里面的 EMAIL 设置：

![image](http://upload-images.jianshu.io/upload_images/12406336-bc037e1da26c4d8c?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

在这里可以配置给客服发送邮件的来源地址，可以是座席自己的，也可以是整个团队公用的。一般来说应该用团队公用的，并且这个邮件地址应该和上文中 MAILGUN ROUTES 中所使用的邮件地址一样。

