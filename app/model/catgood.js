module.exports = app => {
    const mongose = app.mongoose
    const Schema = app.mongoose.Schema
    const CatGoodSchema = new Schema({
        goods_id:{

        },
        cat_id:{

        },
        goods_name:{

        },
        goods_price:{

        },
        goods_number:{

        },
        goods_weight:{

        },
        goods_big_logo:{

        },
        goods_small_logo:{

        },
        add_time:{

        },
        upd_time:{

        },
        hot_mumber:{

        },
        is_promote:{

        },
        cat_one_id:{

        },
        cat_two_id:{

        },
        cat_three_id:{

        },
    })
    return mongose.model('catgood',CatGoodSchema,'goodList')
}