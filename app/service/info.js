const Service = require('egg').Service;
class InfoService extends Service {
    async save(data){
        const {ctx} = this
        const res = await ctx.model.Info.create({
            ...data
        })
        return res
    }
}
module.exports = InfoService
