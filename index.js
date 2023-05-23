const express = require("express");
const app = express();
const poret = 4000;

app.use(require("./routes/products.route"));
app.use(require("./routes/brands.route"));

app.listen(poret, () => {
  console.log("Сервер успешно запущен");
});
