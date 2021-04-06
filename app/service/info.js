const Service = require('egg').Service;
class InfoService extends Service {
    async save(data){
        console.log(data,'你妈妈妈妈妈妈')
        const {ctx} = this
        const res = await ctx.model.Info.create({
            ...data
        })
        return res
    }
    async getInfo(){
        const {ctx} = this
        let {account} = ctx.decode
        console.log(account,'account1111111111111111111111')
        const res = await ctx.model.Info.findOne({account})
        return res
    }
}
module.exports = InfoService
