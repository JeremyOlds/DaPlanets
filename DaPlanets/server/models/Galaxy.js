import { Schema } from "mongoose";


export const GalaxySchema = new Schema({
  name: { type: String, required: true, maxlength: 50 },
  stars: { type: Number, required: true, max: 50000 }
}, {
  timestamps: true, toJSON: { virtuals: true }
})