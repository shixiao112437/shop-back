const BaseControle = require('./base')

class CarouselControle extends BaseControle{
   async  getCarousel(){
       let {ctx} = this
       try {
           let res = await ctx.service.carousel.getCarousel()
           this.success(res)
       } catch (error) {
           this.error(error)
       }
   }
}
module.exports = CarouselControle