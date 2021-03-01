module.exports = app => {
    const mongoose = app.mongoose
    const Schema = mongoose.Schema
    let InfoSchma = new Schema({
        nickname:{
           type: String
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