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
     console.log("requesheader:"+context.request.headers.get('authcode'))
    //  if(request.headers.get('authcode') == env.AUTH_CODE){
     console.log(decodeURIComponent(params.authcode))
     if (decodeURIComponent(params.authcode) === env.AUTH_CODE){
    //  if(1==1){
     context.request
     console.log("old request url:"+request.url);
     console.log("old request url type:"+(typeof request.url));
     const url1=new URL(request.url)
     const url = url1.protocol + '//' + url1.host + '/upload/' + url1.search;
     console.log("new request url:"+url);
     const response = fetch('https://telegra.ph/' + url.pathname + url.search, {
         method: request.method,
         headers: request.headers,
         body: request.body,
     });
     console.log("pathname:"+url.pathname.toString());
     console.log("search:"+url.search.toString());
     console.log("env:"+env);
     console.log("params.code:"+params.code);

    return response;
     }
     else
     {
      return new UnauthorizedException("error");
     }
  }