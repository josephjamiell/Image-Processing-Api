import express from "express";
import images from "./api/images";
const routes = express.Router();

routes.get("/", (req: express.Request, res: express.Response) => {
    res.status(200).send("Welcome to the Image Processing Api");
});

routes.use("/images", images);

export default routes;