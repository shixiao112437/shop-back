module.exports = app => {
    const mongose = app.mongoose
    const Schema = app.mongoose.Schema
    const authSchema = new Schema({
        image_src:{
            type:String
        },
        open_type:{
            type:String
        },
        goods_id:{
            type:String
        },
        navigator_url:{
            type:String
        },
      
    })
    return mongose.model('Carousel',authSchema,"carousel")
}