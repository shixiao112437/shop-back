module.exports = app => {
    const mongoose = app.mongoose
    const Schema = mongoose.Schema
    let musicSchma = new Schema({

    })
    return mongoose.model('Music',musicSchma,'music')
}