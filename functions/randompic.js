
export async function onRequest(context) {
    // Contents of context object
    const {
      request, // same as existing Worker API
      env, // same as existing Worker API
      params, // if filename includes [id] or [[path]]
      waitUntil, // same as ctx.waitUntil in existing Worker API
      next, // used for middleware or to fetch assets
      data, // arbitrary space for passing data between middlewares
    } = context;
    console.log(env)
    const value = await env.img_url.list();

    //console.log(value)
    const len=value.keys.length
    console.log(len)
    const rannum=Math.floor(Math.random() * len)
    console.log(rannum)
    const picname=value.keys[rannum].name
    console.log(picname)
    return Response.redirect(url.origin+"/file"+picname, 302);
  }