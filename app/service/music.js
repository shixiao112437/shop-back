const Service = require('egg').Service

class musicSrvice extends Service {
    async getMusic(){
        const {ctx} = this

        let res = await ctx.model.Music.find()
        return res
    }
}
module.exports = musicSrvice
