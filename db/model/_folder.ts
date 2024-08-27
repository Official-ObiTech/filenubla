import mongoose from "mongoose";

const Schema = mongoose.Schema;

const FolderSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: "User", required: true },
  parent_folder_id: { type: Schema.Types.ObjectId, ref: "Folder" },
  name: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const Folder = mongoose.model("Folder", FolderSchema);

export default Folder;
