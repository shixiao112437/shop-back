
module.exports = options => {
    return async function jwt(ctx, next) {
      const token = ctx.request.header.authorization.split(' ')[1];
      let decode='';
      if (token) {
        try {
          // 解码token
          decode = ctx.app.jwt.verify(token, options.secret);
          console.log(decode,'1111111111111111111111111111111111decode')
          ctx.decode = decode
          await next();
          console.log(decode);
        } catch (error) {
          ctx.status = 401;
          ctx.body = {
            message: error.message,
          };
          return;
        }
      } else {
        ctx.status = 401;
        ctx.body = {
          message: '没有token',
        };
        return;
      }
    }
}