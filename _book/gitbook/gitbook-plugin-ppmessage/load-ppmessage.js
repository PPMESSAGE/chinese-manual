require(['gitbook'], function(gitbook) {

    gitbook.events.on('start', function() {
        console.log("gitbook event start", gitbook);
        loadPPMessage();
    });

    function loadPPMessage() {
        var _config = gitbook.state.config.pluginsConfig.ppmessage;
        
        var _app_uuid = _config.app_uuid || 'a600998e-efff-11e5-9d9f-02287b8c0ebf' ,
            _ppmessage_url = _config.ppmessage_url || 'https://ppmessage.cn/ppcom/assets/pp-library.min.js';
        
        window.ppSettings = {
            app_uuid:_app_uuid
        };
        
        (function(){
            var w=window,d=document;
            function l() {
                var a=d.createElement('script');
                a.type='text/javascript';
                a.async=!0;
                a.charset='utf-8';
                a.src=_ppmessage_url;
                var b=d.getElementsByTagName('script')[0];
                b.parentNode.insertBefore(a,b)
            }
            l();
        })();
    }
    
});
