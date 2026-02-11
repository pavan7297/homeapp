import mongoose, { Schema, Document } from "mongoose";

export interface ISubscribe extends Document {
  email: string;
}

const SubscribeSchema: Schema = new Schema({
  email: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model<ISubscribe>("subscribe", SubscribeSchema);