import mongoose from "mongoose";

const Schema = mongoose.Schema;

const FileSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: "User", required: true },
  folder_id: { type: Schema.Types.ObjectId, ref: "Folder" },
  name: { type: String, required: true },
  type: { type: String, required: true },
  size_bytes: { type: Number, required: true },
  content_hash: { type: String, required: true },
  storage_path: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const File = mongoose.model("File", FileSchema);

export default File;
