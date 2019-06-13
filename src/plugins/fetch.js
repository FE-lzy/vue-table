
// 
function commonFetch(url,options,method="get",success,error){
    var initObj='',init;
    for(var key in options){
        initObj=initObj+key+'='+options[key]+'&';
    }
    initObj=initObj.substr(0,initObj.length-1);

    if(method == 'GET'){
        url=url+"?"+encodeURI(initObj);
        init={
            method:method,
            mode:"cors", 
            credentials: 'include', // 强制加入凭据头 
            headers:new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'          
            }),          
        };
    }
    window.fetch(url,init).then(function(response) {

        return response.json();
    }).then(function(json) {
        success(json);
    }).catch(function(ex) {
    error(ex);
    });

}

/**
 * GET请求
 * @param url 请求地址
 * @param options 请求参数
 */
function GET(url, options,success,err) {
    return commonFetch(url, options, 'GET',success,err)
}

window.GET=GET;


export {GET};