# 设置自动更新字段变量
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

## 自动更新定制字段

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

