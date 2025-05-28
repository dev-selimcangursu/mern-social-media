const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fullname: { type: String },
    username: { type: String },
    email: { type: String },
    password: { type: String },
    date_of_birth: { type: Date },
    biography: { type: String },
    status_id: { type: Number },
    membership_plan_id: { type: Number },
    privacy_status: { type: Boolean },
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

module.exports = { User };
