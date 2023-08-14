import mongoose, { Schema } from "mongoose";
import { Media, Upvote } from "../../../domain/entities/Report";

const ReportSchema = new Schema({
    id: {
        type: String,
        unique: true,
        required: true
    },
    userId: {
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
        type: Array<Media>,
        required: true,
        default: []
    },
    upvotes: {
        type: Array<Upvote>,
        required: true,
        default: []
    }
})

export const ReportMongoDBModel = mongoose.model('Report', ReportSchema)