import mongoose from "mongoose";

export default defineNuxtPlugin(async () => {
  const config = useRuntimeConfig();

  try {
    await mongoose.connect(config.mongodbUri);
    console.log("Connected to MongoDB");
  } catch (e) {
    console.error(e);
  }
});
