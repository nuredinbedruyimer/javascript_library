import express from "express";

const app = express();

let port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`server running on : ${port}`);
});
