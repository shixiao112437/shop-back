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
}
module.exports = ShopControle