function UnauthorizedException(reason) {
  return new Response(reason, {
    status: 401,
    statusText: "Unauthorized",
    headers: {
      "Content-Type": "text/plain;charset=UTF-8",
      // Disables caching by default.
      "Cache-Control": "no-store",
      // Returns the "Content-Length" header for HTTP HEAD requests.
      "Content-Length": reason.length,
    },
  });
}

export async function onRequestPost(context) {  // Contents of context object  
    const {   
     request, // same as existing Worker API    
     env, // same as existing Worker API    
     params, // if filename includes [id] or [[path]]   
     waitUntil, // same as ctx.waitUntil in existing Worker API    
     next, // used for middleware or to fetch assets    
     data, // arbitrary space for passing data between middlewares 
     } = context;
    //  console.log("requesheader:"+context.request.headers.get('authcode'))
    //  if(request.headers.get('authcode') == env.AUTH_CODE){
     /*params.authcode的含义是域名/后面路径当作密钥，picgo使用插件访问方便，如果要网页访问，这个路径会有问题加载不出来，所以又加入参数
     形如/upload?authcode=1*/


     
    //  for (let key of Object.keys(head)) {
    //   console.log(key)
    //   console.log(head[key])
    //   console.log("/n")
    // }
  
    //  const referer = request.headers['referer'] || request.headers['Referer'];
    //  const ref=new URL(referer);
    //  const serachparams = new URLSearchParams(ref.search);
    //  const qauthcode = serachparams.get('authcode');
    //  console.log(referer)
    //  console.log(qauthcode)

    if(1==1){
      context.request
      var head= new headers(request.headers)
      for (let key in head) {
       if (head.hasOwnProperty(key)) { 
         console.log(key + ": " + head[key]);
       }
     }
     console.log(head.referer)
    //  console.log("method");
    //  console.log(request.method)
    //  console.log(JSON.stringify(request.method))
    //  console.log("header");
    //  console.log(JSON.stringify(request.headers))
    //  console.log(head.get('referer'))
    //  console.log(head.get('Referer'))
    //  console.log(head['referer'].tostring)
     

     const url1=new URL(request.url)
     const url = new URL(url1.protocol + '//' + url1.host + '/upload' + url1.search);

    /*url.pathname对下面拼接字符有关键作用，改了就错，请求就失败了,各种报错，二次开发要特别注意
    目前已经改了向telegra.ph的请求，不管什么路径过来都是/upload，具体原因不太清楚，可能是因为telegra.ph下
    就这个路径负责文件上传，改别的基本都是错误请求。
    */

    //  const response = fetch('https://telegra.ph/' + url.pathname , {
    //      method: request.method,
    //      headers: request.headers,
    //      body: request.body,
    //  });
    // return response;
     }
     else
     {
      return new UnauthorizedException("error");
     }
     return new UnauthorizedException("error");
  }