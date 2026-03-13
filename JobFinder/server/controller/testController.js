export const testPostController = (request, response) => {
  const { name } = request.body;
  response.status(200).send(`Your Name is ${name}.`);
};