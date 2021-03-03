const express = require("express");
const routes = require("./routes/htmlRoutes");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", routes);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});