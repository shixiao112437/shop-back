module.exports = app => {
    const mongose = app.mongoose
    const Schema = app.mongoose.Schema
    const authSchema = new Schema({
        account:{
            // 唯一性
            type:String,
            required: true ,
            unique:true,
            dropDups: true
        },
        password:{
            type:String,
            required: true ,
        },
    })
    return mongose.model('auth',authSchema,"shop-auth")
}