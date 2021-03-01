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
    // 登录 
    async login() {
        const {ctx,app} = this
        const {account,password} = ctx.request.body
        const res = await ctx.service.auth.login(account)
        if(password==res){
            const token = app.jwt.sign({
                account,password
            }, app.config.jwt.secret,{
                expiresIn:"1800s"
            })
            this.success(token)
        }else{
            this.success({
                code:1,
                msg:'密码错误'
            })
        }
    }
    // 保存用户信息
    async saveinfo(){
        const {ctx,app} = this
        const data = ctx.request.body
    
        const res = await ctx.service.info.save(data)
        this.success(res)
       
    }
}
module.exports = AuthController