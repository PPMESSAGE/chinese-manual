# 电话集成
PPMESSAGE 集成电话的呼入呼出功能，访客的电话可以通过 PPMESSAGE 的消息流程系统转发至座席。座席也可以直接在对话界面给客户回呼本文讲述电话呼入。

在 PPMESSAGE 中实现电话呼入呼出通过集成第三方服务完成，PPMESSAGE 本身并不收取任何电话相关的费用。只是将消息集成到 PPMESSAGE 的整个消息系统之中。

回到电话呼入呼出使用方法上，目前 PPMESSAGE 集成了 Twilio 和阿里云的服务。


这里略去 Twilio 或阿里云短信的服务配置，如果有需要知道的朋友可以通过在线客服联系我们。这里以 Twilio 为例，讲解下配置服务。

拿到 Twilio 的配置信息后，开始 PPMESSAGE 的后台设置。

设置 -团队设置- 客服电话：

![](https://upload-images.jianshu.io/upload_images/12406336-79dab10b21fa2fd6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



图中那些信息黑色部分是从网站后台获取的。
出局字冠是为了座席向团队外拨打电话时加的前坠，由您自行设置。

还有最后一步，就是流程，PPMESSAGE 本身是一个流程驱动的系统，当客户电话消息来临，相当于触发了 PPMESSAGE 的一个事件，这个事件导致一个流程的执行，而这个流程是可以定制的，根据您的具体要求可以在消息来临后决定执行什么操作。

下面是 PPMESSAGE 自己的流程配置，仅供参考。

![](https://upload-images.jianshu.io/upload_images/12406336-cec92fc54e13091a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

如果觉得流程复杂可以咨询客服，让我们帮您配置好。



这样一个完整的电话呼入就配置好了。您可以使用电话呼入功能了。


