const mongoose = require('mongoose')

const standupSchema = new mongoose.Schema({
    teamMeamber: { type: String },
    project: { type: String },
    workYesterday: { type: String },
    workToday: { type: String },
    impediment: { type: String },
    createOn: { type: Date, default: Date.now }
})

// // disabled _id
// const noIdSchema = new mongoose.Schema(
//     { name: String }, { _id: false }
// )

// Expose model
module.exports = mongoose.model('Standup', standupSchema)