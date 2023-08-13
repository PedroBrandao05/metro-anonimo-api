import mongoose, { Schema } from "mongoose";

const ReportSchema = new Schema({
    id: {
        type: String,
        unique: true,
        required: true
    },
    signature: {
        type: String,
        unique: true,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        district: {
            type: String,
            required: true
        },
        station: {
            type: String,
            required: true
        },
        referencePoint: {
            type: String,
            required: false
        }
    },
    postDate: {
        type: Date,
        required: true
    },
    media: {
        type: Array<{url: string}>,
        required: true,
        default: []
    },
    upvotes: {
        type: Number,
        required: true,
        default: 0
    }
})

export const ReportMongoDBModel = mongoose.model('Report', ReportSchema)