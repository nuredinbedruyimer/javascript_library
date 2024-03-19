import express, { urlencoded } from "express";
import connectDB from "./databases/database.js";
import session from "express-session";
import userRouter from "./routes/userRoutes.js";
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

app.use((req, res, next) => {
  res.locals.message = req.session.message;
  delete req.session.message;
  next();
});
app.set("view engine", "ejs");
app.set("views", "./views");
let port = process.env.PORT || 8000;
app.use("", userRouter);

app.listen(port, () => {
  console.log(`server running on : http://localhost:${port}`);
  connectDB();
});
