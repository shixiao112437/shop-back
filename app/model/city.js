module.exports = app => {
    const mongose = app.mongoose
    const Schema = app.mongoose.Schema
    const citySchema = new Schema({
        label:{
            type:String,
            required: true ,
        },
        value:{
            type:String,
            required: true ,
        },
        pinyin:{
            type:String,
            required: true ,
        },
        short:{
            type:String,
            required: true ,
        },
    })
    return mongose.model('city',citySchema,"city-list")
}