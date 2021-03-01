const BaseControle = require('./base')

class MusicController extends BaseControle {
    async getMusciList(){
        const { ctx } = this
       let res = await ctx.service.music.getMusic()
       this.success(res)

    }
}

module.exports = MusicController
