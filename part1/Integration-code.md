# 集成代码
本文将描述如何将 PPMESSAGE 座席端软件集成到企业的应用业务系统之中。可以免去座席在工作时候同时打开多个应用，在各个应用界面中来回切换的烦恼。

PPMESSAGE 的座席一般都需要登录 PPMESSAGE 的后台系统才能使用其座席功能，如开始与其客户对话。

很多情况下，座席同时要处理企业的内部业务，往往也需要同时打开另外的系统界面，能不能把 PPMESSAGE 座席软件集成到座席的业务系统中呢，答案是非常肯定的，PPMESSAGE 为此做了大量的工作。

只需要前端开发即可集成 PPMESSAGE 的座席插件，将 PPMESSAGE 的座席功能集成到企业的自身的业务系统中。具体过程是这样的：

登录 PPMESSAGE 后台管理系统，设置 - 网页座席插件、网页座席链接

网页座席插件是插件代码，将这行代码复制到企业应用系统的前端页面中即可，企业应用系统马上具备 PPMESSAGE 的客服功能，座席无需再打开 PPMESSAGE 的后台系统去使用座席功能了。

网页座席链接是一个链接，这个链接模拟了一个企业应用系统，同时集成了 PPMESSAGE 座席插件。您可以快速查看将座席集成到应用系统里面，是个什么效果。

可以将网页插件代码复制到任何网站的 ‘检查’ - ‘Console’下执行，去观察在前端执行的效果，假设企业的业务系统是·百度·，把网页插件代码复制过来，同时要把 script 的 tag 去掉，回车就执行，执行后没有任何界面上的变化，不用急，需要再执行一个指令 ‘PP.show();’，这样就会有登录座席的登录界面弹出来了。

登录界面效果如下：

![image](http://upload-images.jianshu.io/upload_images/12406336-c92d5410709846d3?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

会话界面效果如下：

![image](http://upload-images.jianshu.io/upload_images/12406336-6c4ff66a5e52c576?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

文档搜索 PPMESSAGE 网页聊天高级集成方法了解更多。
