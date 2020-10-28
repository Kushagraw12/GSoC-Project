const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const OraganisationSchema = new Schema({
    orgName: {
        type: String,
        required:true
    },
    Stack: {
        type: Array,
        required:true
    },
    Slots: {
      type: Number,
      default: 0,
    },
    Page: {
        type:String,
        required:true
    },
    Contact: {
        type: String,
        default: Date.now
    }
});

module.exports = Organisation = mongoose.model('organisations', OraganisationSchema);
