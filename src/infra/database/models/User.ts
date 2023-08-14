import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    id: {
        type: String,
        unique: true,
        required: true
    }
})

export const UserMongoDBModel = mongoose.model('User', UserSchema)