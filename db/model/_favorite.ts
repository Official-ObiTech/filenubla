import mongoose from "mongoose";

const Schema = mongoose.Schema;

const FavoriteSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: "User", required: true },
  file_id: { type: Schema.Types.ObjectId, ref: "File" },
  folder_id: { type: Schema.Types.ObjectId, ref: "Folder" },
  created_at: { type: Date, default: Date.now },
});

const Favorite = mongoose.model("Favorite", FavoriteSchema);

export default Favorite;
