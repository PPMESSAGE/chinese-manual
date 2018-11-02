# 配置客户信息
 *如何查看，过滤，搜索和细分客户*
在PPMessage，我们的使命是使商业个性化。因此，我们可以让您轻松了解每个访客并可以统计分析不同访客群体的行为特征。您可以根据您的业务需要，在PPMessage设置特定于您的用户群的自定义用户属性和用户事件。您可以在与客户聊天时记录这些自定义用户属性，也可以通过Javascript代码将这些信息推送给PPMessage。这些属性将和PPMessage的标准字段一起出现在PPMessage 访客界面的过滤条件列表里，您可以利用这些属性进行客户细分。
## 设置定制字段

PPMessage允许您根据您的业务创建和跟踪有关客户的定制字段。 您可以使用此数据过滤和创建客户细分，为该细分里的客户分配不同的座席，发送有针对性的消息和进行营销活动。

定制字段跟踪有关您的客户的基本信息，例如某人所在的产品计划，或者他们注册的时间，而不是追踪客户的行为。

下面是一个示例：如果您的产品是项目管理工具，您可以跟踪每个用户拥有的文件数量。 如果您想要向尚未开始向该工具添加文件的用户发送消息，则可以设置针对“文件小于1”的用户发送消息。

在PPMessage上设置的最常见定制字段是关于培育客户的信息，例如:

- 价格计划
- 购买金额
- 添加的团队成员数量
- 播放的歌曲数量
- 订阅结束日期

您也可以添加一些需要聊天时手动获得的客户属性信息作为定制字段，例如客户的微信和QQ号。

## 如何创建定制字段？

访问 ·设置-客户管理-访客字段·

![](https://upload-images.jianshu.io/upload_images/12406336-a1e2344e3fce2b32.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

在访客字段界面的“定制字段”部分，您可以根据您的业务需要，添加定制字段。下图示例中已经添加了“微信号”和“QQ号”两个定制字段。添加完成后您可以随时编辑或删除他们。

![](https://upload-images.jianshu.io/upload_images/12406336-bfdd669df3dfc436.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

在添加定制字段时有两个复选框 “显示在过滤”和“显示在列表”。复选“显示在过滤”，则该字段显示在访客界面的过滤条件列表中，若复选“显示在列表”则该字段作为一列显示在访客界面的访客列表内。

![](https://upload-images.jianshu.io/upload_images/12406336-11cd19141ab72cba.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

通过在Javascript代码引用定制字段的内部名称，您可以利用您的业务系统的数据实时更新这些定制字段的值。

## 设置自动更新字段变量
如果您希望通过您的业务系统的数据实时更新PPMessage中的某些标准字段和定制字段的值，您需要在网页客户端为访客的定制字段设置值，这样可以便于给访客细分并对细分的访客组执行不同的操作。

### 自动更新系统标准字段

如果新希望将您的业务系统里用户ID、姓名、头像、手机号码、电话号码和创建时间传递给PPMessage, 您需要在网页聊天插件代码添加以下内容，注意要把null替换为您业务系统中对应的变量。

```
window.ppSettings = {
 ent_user_id: null,
 ent_user_name: null,
 ent_user_icon: null,
 ent_user_mobile: null,
 ent_user_phone: null,
 ent_user_qq: null,
 ent_user_wechat: null,
 ent_user_create_time: null
};

```

这样座席就能看到您设定的用户信息。其中ent_user_id 是指企业用户标识，这个ID来自您的系统，您用这个标识来分辨每个不同的客户；ent_user_icon必须要用绝对的 URL 地址，因为 PPMesasge系统是分离的，如果在 PPMessage显示您的客户的头像，这个链接必须是绝对的 URL；ent_user_create_time 这个数据用来标识用户转化，因为这是一个注册用户（您都有 ID 标识了），那么创建时间就意味着您成功获取这个客户的时间。如果想传递指定的用户信息，必须指定一个 ent_user_id。

### 自动更新定制字段

如果您在系统中设置了定制字段，并且希望通过业务系统的数据实时更新它的值，您需要在网页聊天插件代码中添加如下内容。本例中，“extra_field_TEXT_3”是我们在前面设置的定制字段的“QQ号”的内部名称。您在进行配置时，要把代码中的“extra_field_TEXT_3”替换为“设置-客户管理-访客字段”中对应定制字段的内部名称。下面的代码必须确保在聊天组件已经成功加载的情况下执行。

```
window.PP.setVar({"extra_field_TEXT_1": "Hello World"}, function() {
  //成功设置      
}, function() {
  //设置失败
});

```

代码执行后，客户信息的定制字段部分将显示更新后的信息。需要注意的是，如果您设置了通过业务系统的数据更新定制字段，手动更新的值将在客户下次登录时被自动覆盖。

![](https://upload-images.jianshu.io/upload_images/12406336-15c13509eaaa51bf.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 设置应用中要跟踪的事件
PPMessage的事件跟踪功能将用户的基本信息和他们的行为结合起来，使您可以发送具有高度针对性，相关性和吸引力的消息。 
事件是系统对用户行为进行跟踪的基本数据，通过管理员在管理后台定义，每个事件在访客浏览网页的时候，由开发者控制产生。PPMessage可以跟踪事件的次数，首次创建时间，最后创建时间，最后更新数据，这些数据可以用来进行访客过滤和创建客户细分。
本文演示了一个 ‘click’ 事件，能够收集客户在网页上的所有的鼠标点击事件，可以做出点击的“热力图”。

### 自定义事件
访问 “设置-客户管理-访客字段”，点击添加新的事件。

![](https://upload-images.jianshu.io/upload_images/12406336-1efeaf11f49a0c84.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

PPMessage目前最多允许 8个自定义事件类型。创建完成后，事件字段列表中会出现一个新的事件字段。

![](https://upload-images.jianshu.io/upload_images/12406336-d04199e6142edf60.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 跟踪事件
为了跟踪网页上的点击事件，您需要在网页聊天插件代码中添加如下内容

```
$(document).on("click", function(event) {

if (!window._ppmatc) {
  window._ppmatc = [];
}

window._ppmatc.push({
  track_event: {
    event_name: "click",
    event_uuid: "xxxx-xxxx-xxxx-xxxxx",
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

其中 window._ppmatc 这个队列会被 PPMessage 定期检查，如果发现有事件数据对象就会上报给后台系统。
上报的数据结构必须如上述代码所描述，是一个 Javascript 对象，并且含有 track_event 成员，在track_event 里面要指定 event_name, event_uuid, event_data。其中event_name 和 event_uuid 要与您在“设置-客户管理-访客字段”配置的字段信息一致，event_data 可以是任意数据对象。

## 设置客户类型
PPMessage可以实现极简的CRM销售管理功能，您也可以设置PPMessage与您的CRM系统对接，将用户的客户信息推送给您的CRM系统。例如，您可以根据初步接洽客户，深入接触、成单、回款的销售流程将客户设置为不同的客户类型。在PPMessage中，您可以将在网页上或应用内主动联系您的用户分类为潜在用户，将提供给您有效联系方式的用户分类为销售商机。这样你就可以分时段统计潜在用户和销售商机数量，从而了解您的工作绩效。
客户类型在“设置-客户管理-客户类型”中设置。

![](https://upload-images.jianshu.io/upload_images/12406336-6015c4720a3a4d7a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

