# 配置第三方服务
PPMessage可以与第三方服务集成实现邮件营销、短信营销和云呼叫中心等功能。如果您不需要这些服务，就不要配置第三方服务。

## 配置短信服务
PPMessage 集成短消息的收发功能，客户发送的短消息可以通过 PPMessage 的消息流程系统转发至座席。座席也可以直接在对话界面给客户回复短消息，座席也可以给离线的客户通过短消息留言。
在 PPMessage 中实现短消息收发和邮件收发的方法是一样的。都是通过集成第三方服务完成，PPMessage 本身并不收取任何短消息的费用。只是将短消息集成到 PPMessage 的整个消息系统之中。
PPMessage 能够通过这些离线通讯手段，短消息、电子邮件、移动应用消息推送、电话外呼，设计自动流程，自动的流程的启动时机是系统根据设定调度的，不是根据用户事件触发；一般来说靠定时驱动，比如您可以设定一个自动流程，这个自动流程每隔1小时运行一次，每次都对一个用户细分进行消息发送。当然在实际情况中，可能是1天检查运行，或者是一个月运行一次，因为毕竟客户离你而去是有原因的，频繁的骚扰只会带来更远的距离和更坚决的拒绝。
回到短消息使用方法上，目前 PPMessage 只集成了 Twilio 的短消息服务，因为只有 Twilio 能够做到发送和接收同时支持，如 Mailgun 一样，Mailgun 也同时支持 邮件的接收与发送。
这里插一句题外话，我们经常发现很多软件或者模式在国外行得通到了中国就水土不服了，原因可能有很多，但是至少有一条，我发现很多人没有注意到，就是产品本身完全没有达到对标产品一个犄角的水平，然后就在一个层次上谈成败，是不是有点不科学。就单单 短消息服务和邮件服务来说，国内的提供者那是一把一把的，但与 Mailgun 和 Twilio 的产品水平差距太大，不谈体验那些虚无的东西，就单单一个接收邮件和接收短消息服务，没有一家能够提供的。CRM 产品就更不用说了就一个 ZOHO 的 CRM（自称比不上 Salesforce 的 CRM SaaS 系统）恐怕中国的 CRM SaaS 服务一辈子都撵不上，无论怎么烧钱做广告，结局不言自明。
这里略去 Twilio 的服务配置，如果有需要知道的朋友可以通过在线客服联系我们。
拿到 Twilio 的配置信息后，开始 PPMessage 的后台设置。
设置 - 第三方服务 - 短信服务:

![](https://upload-images.jianshu.io/upload_images/12406336-cc59d1be79752039.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

这里面隐去了 PPMessage 真实的配置信息，那些信息都是从 Twilio 的网站后台获取的。
最后一项是接收客户短消息，如果选中了，那么这个 URL 是需要提供给 Twilio 的，这是 PPMessage 为您专门准备的 WEB 服务，这样 Twilio 收到短消息的时候就会同时发送一个请求给这个 URL，这样 PPMessage 就能够收到客户的短消息了。
还有最后一步，就是流程，PPMessage 本身是一个流程驱动的系统，当客户短消息来临，相当于触发了 PPMessage 的一个事件，这个事件导致一个流程的执行，而这个流程是可以定制的，根据您的具体要求可以在消息来临后决定执行什么操作。

## 配置邮件服务
一般的来说，集成邮件发送还是比较简单的，集成收邮件稍微有点复杂。这也是为什么很多系统都是能够给客户发送邮件，但是标题上都写着不要回复，因为你回复他们也收不到，或者收到了也没有办法分配到人去处理。
PPMessage 提供了邮件系统集成，目前支持 MAILGUN 的邮件服务，如果您已经注册了 MAILGUN 的邮件服务，MAILGUN的免费额度非常大，一个月一万封，对那些不是不正经的业务来说，这些足够了。
PPMessage 的机制可以支持任何第三方邮件系统，但是目前在国内并没有找到同时支持邮件发送和接收的服务，所以 MAILGUN 几乎是唯一的选择了。有很多朋友反馈 QQ 邮箱封了 MAILGUN 的 IP，以 PPMessage 团队测试的结果来看，QQ 邮箱并没有封 MAILGUN 的 IP，只是 QQ 邮箱的安全策略会对高频的邮件请求的 IP 有限制，并不是固定的封锁了 MAILGUN 的 IP，通过 MAILGUN 发送的邮件也都送达了，只是如果 QQ 邮箱 BLOCK 之后，MAILGUN 会延迟一会儿再投递。

![](https://upload-images.jianshu.io/upload_images/12406336-a6335af6fc9e1efe.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

在拥有了 MAILGUN 之后，需要在 MAILGUN 里面定义 DOMAIN，并且要按照MAILGUN的说明去配置 DNS。

![](https://upload-images.jianshu.io/upload_images/12406336-d3ec7a589b048d3a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

上图是 ppmessage.cn 的配置，目的是创建一个 mg.ppmessage.cn 的二级域名，因为 ppmessage.cn 已经有一个 MX 记录指向了 QQ 邮箱。
经常有人说 QQ 邮箱屏蔽了 MAILGUN，可能不是屏蔽了 MAILGUN，MX记录配置错误了也会导致拒收。（在同一个域名级别下配置了 MAILGUN 和 QQ 的邮件服务器）
当然也有 IP FREQUENCY LIMIT 的问题，我们又能又什么办法呢。只有等，无尽的等。最后还是能收到的。
严格按照 MAILGUN 的要求进行配置后，MAILGUN 也提供了检查工具，如果检查工具通过了，State 就是 Active 状态。

![](https://upload-images.jianshu.io/upload_images/12406336-ee3e8957e5ca32c3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

配置这些后，回到 PPMessage 的管理后台：设置 - 第三方服务 - 邮件服务

![](https://upload-images.jianshu.io/upload_images/12406336-974cdfb0c9d8c38d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

创建一个新的邮件服务，把 MAILGUN 的 API KEY 和 DOMAIN 填好，并且激活，激活的服务配置在左侧有个垂直的蓝色标志。
ENABLE INBOUND EMAIL （允许收邮件） 把蓝色的部分复制下来，再回到 MAILGUN 的配置界面，为收邮件配置一条路由规则，这样 PPMessage 就可以通过 MAILGUN 收邮件。
在 MAILGUN 的主配置菜单中选择 Routes，添加一条规则，这里面是指所有发往 support@mg.ppmessage.cn 的邮件都转发转到那个刚刚复制下来的 URL 服务中。

![](https://upload-images.jianshu.io/upload_images/12406336-8a7e33919f09e66c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

现在可以测试一下，给 support@mg.ppmessage.cn 发一封邮件，看看 PPMessage 的座席收到了邮件没有，邮件发过来一般需要20秒。
果真，收到了邮件！直接回复试试看，PPMessage 根据客户消息的的来源，决定如何给客户返回消息，这样客户就通过邮件收到了客服人员在 PPMessage 中直接回复的消息。
这里面还有一个需要设置的地方就是，在 PPMessage 后台，设置 - 客户管理 - 客户离线消息处理，这里面的 EMAIL 设置:

![](https://upload-images.jianshu.io/upload_images/12406336-bf42993f4ca19582.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


在这里可以配置给客服发送邮件的来源地址，可以是座席自己的，也可以是整个团队公用的。一般来说应该用团队公用的，并且这个邮件地址应该和上文中 MAILGUN ROUTES 中所使用的邮件地址一样。
## 配置语音服务
