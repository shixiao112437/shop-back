const BaseControle = require('./base')
class CityController extends BaseControle {

    async getList(){
        const {ctx} = this
        try {
            let res = await ctx.model.City.find()
            this.success(res)
        } catch (error) {
            this.error(error)
        }
    }

}


module.exports = CityController