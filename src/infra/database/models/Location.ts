import mongoose, { Schema } from "mongoose";

const LocationSchema = new Schema({
    id: {
        type: String,
        unique: true,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    station: {
        type: String,
        required: true
    },
})

export const LocationMongoDBModel = mongoose.model('Location', LocationSchema)