# 系统内置变量
系统内置变量对应系统的标准字段，其名称及含义如下表:

|变量名称|变量含义|
|:---|:---:|
| user_fullname|访客全名|
|user_email| 访客邮件地址|
|user_mobile|访客手机号码|
|user_language|访客语言|
|user_country|访客国家|
|user_city|访客城市|
|ent_user_createtime|注册时间，这是通过访客端的接口传进来的值，表示这个访客是个注册用户，其注册的时间|
|customer_user_type|访客类型，类型的值是通过客户类型自定义的|
|browser_name|浏览器名称|
|app_name|移动应用名称|
|is_anonymous_user| 访客是匿名的 |
|user_channel|用户来源的渠道，可以是 CHANNEL_WEB CHANNEL_APP CHANNEL_EMAIL 等等|
|user_web_sessions|网页会话次数|
|page_title|访问网页标题|
|page_url|访问网页 URL|
|browser_language|浏览器语言|
|is_assigned_user|已经分配了客服的访客|
|message_subtype|消息类型|
|message_body|消息内容|
|email_body|邮件内容|
|email_subject|邮件主题|
|email_recipient|邮件接受者|
|called_number|被叫号码|
|caller_number|主叫号码|
|sms_from|短消息来源|
|sms_to|短消息发给谁|
|sms_body|短消息内容|
|user_input_dtmf|电话按键|
