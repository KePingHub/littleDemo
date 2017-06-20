/**
 * Created by Administrator on 2017/5/19.
 */
ajax = {
    get : function (option){
        if(!option.url && typeof option.onSuccess == "function") return;
        var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
        xhr.open("GET",option.url,true);
        xhr.onreadystatechange = function (){
            if(xhr.readyState == 4){
                if(xhr.status == 200){
                    option.onSuccess(xhr.responseText);
                }else{
                    if(typeof option.onFail == "function"){
                        option.onFail(xhr.responseText);
                    }
                }
            }
        };
        xhr.send(null);
    },

    post : function (option){
        if(!option.url && typeof option.onSuccess == "function") return;
        var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
        xhr.open("POST",option.url,true);
        xhr.onreadystatechange = function (){
            if(xhr.readyState == 4){
                if(xhr.status == 200){
                    option.onSuccess(xhr.responseText);
                }else{
                    if(typeof option.onFail == "function"){
                        option.onFail(xhr.responseText);
                    }
                }
            }
        };
        if(typeof option.data == "string") {
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        }
        xhr.send(option.data);
    }
};