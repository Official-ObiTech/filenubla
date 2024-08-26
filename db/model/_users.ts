import mongoose from "mongoose";

const Schema = mongoose.Schema;

// User Schema
const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password_hash: { type: String, required: true },
  username: { type: String },
  first_name: String,
  last_name: String,
  created_at: { type: Date, default: Date.now },
  last_login: Date,
  storage_plan: {
    name: { type: String, required: true },
    space_gb: { type: Number, required: true },
    price_per_month: { type: Number, required: true },
  },
  used_space_bytes: { type: Number, default: 0 },
});

UserSchema.index({ email: 1 }, { unique: true });

const User = mongoose.model("User", UserSchema);

export default User;
