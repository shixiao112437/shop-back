const { app } = require("egg-mock");

module.exports = (option,app) => {
    return async function(ctx,next) {
        console.log(`
        请求参数
        ${ctx.request.params}`) ||  
        console.log(`
        请求参数
        ${ctx.request.body}`);
        await next()
    }
}