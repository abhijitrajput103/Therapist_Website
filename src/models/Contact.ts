import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    preferredTime: {
        type: String,
        required: true,
    },
    terms: {
        type: Boolean,
        required: true,
    },
}, { timestamps: true }
);
export default mongoose.models.Contact || mongoose.model("Contact", ContactSchema);