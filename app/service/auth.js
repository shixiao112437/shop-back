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
    async login(account){
        const {ctx} = this
       try {
        const res = await ctx.model.Auth.findOne({
            account
        })
        return res.password||''
       } catch (error) {
        return error
       }
    }
}
module.exports = authSrvice