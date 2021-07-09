const Subscription = require('egg').Subscription

class UpdateCache extends Subscription {
   static get schedule(){
       return {
           interval:"1m",
           type:"all",
       }
   }
//     
   async subscribe(ctx){ 
       let res = await ctx.curl()
   }
}