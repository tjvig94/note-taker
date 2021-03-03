const express = require("express");
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", htmlRoutes);
app.use("/", apiRoutes);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});