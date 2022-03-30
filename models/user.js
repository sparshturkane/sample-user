const { Date } = require('mongoose');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    basic: {
        name: {
            type: String
        },
        mobile: {
            type: String,
            unique: true,
        },
        status: {
            type: Boolean
        }
    },
    detail: {
        photo: {
            type: String
        },
        linkedin: {
            type: String
        },
        dob: {
            type: Date
        }
    },
    experience: {
        position: {
            type: String
        },
        companyName: {
            type: String
        },
        location: {
            type: String
        }
    }
})

module.exports = mongoose.model('User', userSchema);