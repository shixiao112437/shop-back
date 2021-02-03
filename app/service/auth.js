const Service = require('egg').Service
class authSrvice extends Service {
    // 注册
    async  create(data){
        const {ctx} = this
        const res = await ctx.model.Auth.create({
            ...data
        })
        return res
    }
}
module.exports = authSrvice