"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var imageprocessor_1 = __importDefault(require("../../utilities/imageprocessor"));
var images = express_1.default.Router();
images.get("/", function (req, res) {
    var name = String(req.query.name);
    var height = Number(req.query.height);
    var width = Number(req.query.width);
    try {
        imageprocessor_1.default.resizeImage(name, height, width)
            .then(function (data) {
            if (data !== "") {
                res.status(200).sendFile(data);
            }
        })
            .catch(function (err) { return res.status(500).send(err); });
    }
    catch (err) {
        res.status(500).send(err.message);
    }
});
exports.default = images;
