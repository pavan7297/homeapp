import mongoose, { Schema, Document } from "mongoose";

export interface IContactInfo extends Document {
  fullname: String;
  phone: Number;
  email: String;
  state: String;
  degree: String;
  course: String;
}

const ContactInfoSchema: Schema = new Schema(
  {
    fullName: { type: String, required: true },
    phone: { type: Number, required: true },
    email: { type: String, required: true },
    state: { type: String, required: true },
    degree: { type: String, reuired: true },
    course: { type: String, required: true },
  },
  { timestamps: true },
);

export default mongoose.model<IContactInfo>("contactinfo", ContactInfoSchema);
