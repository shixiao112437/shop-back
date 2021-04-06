module.exports = app => {
    const mongoose = app.mongoose
    const Schema = mongoose.Schema
    let InfoSchma = new Schema({
      account:{
         type: String,
         required:true,
         unique:true
      },
        nickname:{
           type: String,
         required:true,

        },
        tel:{
           type: String
        },
        gender:{
           type: Number
        },
        age:{
           type: String
        },
        birth:{
           type: Date
        },
        brief:{
           type: String
        }
        
    })
    return mongoose.model('Info',InfoSchma,'shop-info')
}