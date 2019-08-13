const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tasksSchema = new Schema ({
    task: String,
    date: Date
})

let Task = mongoose.model('Task', tasksSchema);

module.exports = Task;