const Service = require('egg').Service;
class shopService extends Service{
    async getGategories(){
        const {ctx} = this
        let res =await ctx.model.Shop.find()
        return res
    }
    // 根据分类获取商品列表
    async getCatGoods({cid,page,pageSize}){
        const {ctx} = this

        let res=ctx.model.Catgood.find().skip(page-1).limit(pageSize*1)
        return res

    }
}
module.exports = shopService