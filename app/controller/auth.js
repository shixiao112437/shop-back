const BaseControle = require('./base')

class AuthController extends BaseControle {
    // 注册
    async rigister() {
        const { ctx } = this
        let { account, password } = ctx.request.body
        try {
            let res = await ctx.service.auth.create({
                account, password
            })
            this.success(res)
        } catch (error) {
           this.error(error)
        }
    }
}
module.exports = AuthController