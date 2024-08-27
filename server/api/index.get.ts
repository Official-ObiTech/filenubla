import User from "~/db/model/_users";

export default defineEventHandler(async (event) => {
  const users = await User.find({});
  return users;
});
