const BaseControle = require('./base')

class ShopControle extends BaseControle{
    // 获取商品类别
    async getGategories(){
        const { ctx } = this
            try {
                let res = await ctx.service.shop.getGategories()
                this.success(res)
            } catch (error) {
                this.error(error)
            }
    }
    // 
    async getCatGoods(){
        const {ctx} = this

        let {cid,page,pageSize} = ctx.request.query
        console.log(ctx.request.query,'AAAAAAAAAA')
        let res =await ctx.service.shop.getCatGoods({cid,page,pageSize})
        this.success(res)
       
    }
}
module.exports = ShopControle