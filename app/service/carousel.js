const Service = require('egg').Service
class carouselService extends Service {
    async getCarousel(){
        let {ctx} = this
        let res = await ctx.model.Carousel.find()
        return res
    }
}
module.exports = carouselService