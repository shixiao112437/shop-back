const Service = require('egg').Service;
class shopService extends Service{
    async getGategories(){
        const {ctx} = this
        let res =await ctx.model.Shop.find()
        return res
    }
}
module.exports = shopService