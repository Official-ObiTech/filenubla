export default defineEventHandler(async (event) => {
  const payload = await readBody(event);
  console.log(payload);

  return true;
});
