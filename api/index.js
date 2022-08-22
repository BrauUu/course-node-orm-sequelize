import 'dotenv/config';
import express from "express";
import routes from "./routes/index.js";

const app = express();
routes(app);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`running on http://localhost:${port}`);
})
export default app;


