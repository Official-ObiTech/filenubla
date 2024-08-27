import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ShareSchema = new Schema({
  file_id: { type: Schema.Types.ObjectId, ref: "File" },
  folder_id: { type: Schema.Types.ObjectId, ref: "Folder" },
  user_id: { type: Schema.Types.ObjectId, ref: "User", required: true },
  shared_with_user_id: { type: Schema.Types.ObjectId, ref: "User" },
  shared_with_email: String,
  permission: {
    type: String,
    required: true,
    enum: ["read", "write", "admin"],
  },
  created_at: { type: Date, default: Date.now },
});

const Share = mongoose.model("Share", ShareSchema);

export default Share;
