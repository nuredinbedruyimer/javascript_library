import express, { urlencoded } from "express";
import connectDB from "./databases/database.js";
import session from "express-session";

const app = express();

app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET_KEY || "MySecretKey",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      maxAge: 60000,
    },
  })
);

let port = process.env.PORT || 8000;
app.get("/test", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API Working",
  });
});

app.listen(port, () => {
  console.log(`server running on : http://localhost:${port}`);
  connectDB();
});
