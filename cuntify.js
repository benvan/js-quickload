(function() {
    var baseUrl = 'localhost:5000';

    var src = baseUrl + '/assets/js/hayesmaker/cunt.js';
    loadScript(src, onLoadSucces);

    function onLoadSucces() {
        logger('script load successful but may still be loading scripts');

    }

    function loadScript(url, callback){

        var script = document.createElement("script");
        script.type = "text/javascript";

        if (script.readyState){
            script.onreadystatechange = function(){
                if (script.readyState == "loaded" ||
                    script.readyState == "complete"){
                    script.onreadystatechange = null;
                    callback();
                }
            };
        } else {
            script.onload = function(){
                callback();
            };
        }

        script.src = url;
        document.body.appendChild(script);
    }

    function logger(str) {
        if (console) {
            console.log(str);
        }
    }
})();