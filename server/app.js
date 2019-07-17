const Express = require("express");
const { db, User, Question } = require("../db/db");

const app = Express();

app.use(Express.urlencoded());

const init = async () => {
  await db.sync({ force: true });
  const PORT = 1337;
  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
};
init();

app.get("/", async (req, res, next) => {
  const result = await Question.findAll({ include: User });
  res.json(result);
});

app.post("/", async (req, res, next) => {
  try {
    const user = new User({
      email: req.body.email
    });
    Object.keys(req.body.specificAnswers).map(item => {
      const question = new Question({
        number: item,
        answer: req.body.specificAnswers[item]
      });
    });
    res.send("entry saved");
  } catch (err) {
    console.error(err);
  }
});
