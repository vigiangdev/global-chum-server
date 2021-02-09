const mongoose = require("mongoose");

const app = require("./app");

const database = process.env.DB.replace("<dbusername>", process.env.DB_USERNAME)
  .replace("<password>", process.env.DB_PASSWORD)
  .replace("<dbname>", process.env.DB_NAME);

mongoose
  .connect(database, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Connected to database.`);
  })
  .catch((err) => {
    console.error(err);
  });

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
