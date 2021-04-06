module.exports = app => {
    const mongose = app.mongoose
    const Schema = app.mongoose.Schema
    const shopSchema = new Schema({
        cat_id:{
            type:Number,

        },
        cat_name:{
            type:String,

        },
        cat_pid:{
            type:Number,

        },
        cat_level:{
            type:Number,

        },
        cat_deleted:{
            type:Boolean,

        },
        cat_icon:{
            type:String,

        },
        children:{
            type:Array,

        },
    })
    return mongose.model('Shop',shopSchema,'goods_group')
}