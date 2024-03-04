const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT;

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then((con) => {
  //   console.log(con.connections);
  console.log("DB connection successfully");
});
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
