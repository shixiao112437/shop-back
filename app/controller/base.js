const Controller = require('egg').Controller

class BaseControle extends Controller {
    async success(data) {
        this.ctx.body = {
            msg: data.msg||'success',
            code: data.code||0,
            data
        }
    }
    async error(err) {
        this.ctx.body = {
            msg: 'error',
            code: err && err.code || 1,
            error: err
        }
    }
}
module.exports = BaseControle