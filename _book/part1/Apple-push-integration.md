# ios 推送
[PPMESSAGE](https://ppmessage.cn/) 集成了 iOS 推送；是指通过 PPMESSAGE 可以给你的客户发送 iOS 推送消息.

通过 PPMESSAGE 集成 iOS 推送，你可以有节制，有目的的推送，通过流程配置和用户细分只对那些你感兴趣的用户进行推送消息，对那些不打开程序的反复推送只能加剧删除你 APP 的决心。当然这一切都是猜测，需要有数据支持，究竟什么样的客户，什么时候才能推送消息？这些 PPMESSAGE 都可以帮助实现，去评估推送的效果，根据用户的动作或者行为设置目标转化，通过观察数据结果来改变你的营销行为。

工具不能让你提高转化率，或者保留率，工具的滥用可能让你损失客户。但是数据化的工具可以帮助检查你的策略和用户在策略下的行为和反馈，从而朝积极或者消极的方向去调整策略（也许你就是要烦死客户，让它卸载你的 App，然后你就清净了呢）。

使用 APNs 推送具体配置方法也需要注意，因为最近 Apple 升级 APNs 的推送方法，提供了更方便的证书和推送方式，证书提供了复合证书，即一个证书即包含了开发，又有产品两套，推送协议也变成了 http2.0；最重要的是还提供了一个 Auth Key，完全替换以前的证书，这个让开发者方便了很多很多。

具体方法是：

*   获取 APNs Auth Key，这个要在 Apple 的开发者网站上获取，这步没坑，放心下载一个 p8 （PKCS8）的文件，聪明的你一定会问，啥是 p8？问得好，[请看这里](https://en.wikipedia.org/wiki/PKCS_8)，这应该是 PKI 中私钥的封装格式。

*   打开 PPMESSAGE 后台，设置 - 第三方服务 - APNs 推送

![image](http://upload-images.jianshu.io/upload_images/12406336-32020e271149f3e9?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

这里面的配置信息都可以在 Apple Developer 的网站上找到对应项，那个 Key 就是 PPMESSAGE 自己的私钥，已经漏出一部分了。（据说 Google 大牛 Jeff Dean 在加入 Google 进行面试的时候，看了一眼 Google 的证书 就把 私钥写在 黑板上，仰天大笑出门去！ 很搞笑，想出这个笑话的人很有趣。）

同时可以配置两个，一个用来开发使用，一个用来产品使用，内容都是一样的，就是 开发 和 产品的选择不同，只是会让 PPMESSAGE 推送的时候，选择 不同的推送服务器。当你的程序发布在 Apple 的 App Store的时候，必须使用产品服务器。

另外，如果你并没有 PPMESSAGE 做 iOS 推送，那么下面的代码你可能需要，这是把 Auth Key 转成 OPENSSL 可以理解的格式。

```
from textwrap import wrap

def wrap_private_key(private_key):
    # Wrap key to 64 lines
    private_key = private_key.strip()
    comps = private_key.split("\n")
    wrapped_key = "\n".join(wrap(comps[1].strip(), 64))
    return "\n".join([comps[0].strip(), wrapped_key, comps[2].strip()])

```
