import express from "express";
import routes from "./routes/index";

const app = express();
const port = 3000;

app.use("/", routes);

app.listen(port, () => {
    console.log(`Server is listening on localhost:${port}`);
    console.log("Press ctrl + c to exit...");
});

export default app;