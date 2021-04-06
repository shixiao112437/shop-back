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
        const { ctx, app } = this
        const { account, password } = ctx.request.body
        try {
            const res = await ctx.service.auth.login(account)
            if (password == res) {
                const token = app.jwt.sign({
                    account, password
                }, app.config.jwt.secret, {
                    expiresIn: "1800s"
                })
                this.success(token)
            } else {
                this.success({
                    code: 1,
                    msg: '密码错误'
                })
            }
        } catch (error) {
            this.error(error)

        }
    }
    // 保存用户信息
    async saveinfo() {
        const { ctx, app } = this
        let { account } = ctx.decode
        console.log(account, 'account')
        const data = ctx.request.body
        try {
            const res = await ctx.service.info.save({ ...data, account })
            this.success(res)
        } catch (error) {
            this.error(error)
            
        }

    }
    //  获取用户信息
    async getAuthInfo() {
        let { ctx } = this

        const res = await ctx.service.info.getInfo()
        try {
        this.success(res)
            
        } catch (error) {
            this.error(error)
            
        }
    }
    // 获取验证码
    async getVerific() {
        this.success({
            imgUrl:"http://127.0.0.1:7001/public/img/photo1.jpg", // 图片
            miniImg:"http://127.0.0.1:7001/public/img/photo.jpg" // 小图片
        })
    }
    // 校验验证码
    async checkVerific() {
      let {ctx} = this
      let {left} =  ctx.request.body
      if(left>150){
        this.success({left})
      }else{
        this.error({left})

      }
    }
}
module.exports = AuthController