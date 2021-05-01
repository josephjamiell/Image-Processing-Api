"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var imageprocessor_1 = __importDefault(require("../utilities/imageprocessor"));
var fs_1 = __importDefault(require("fs"));
var testImagePath = "./images/cached/fjord_555x555.jpg";
beforeAll(function () {
    if (fs_1.default.existsSync(testImagePath)) {
        fs_1.default.unlinkSync(testImagePath);
    }
});
describe("Test Image Existence, Processing and Creation", function () {
    it("Should create a file called 'fjord_555x555.jpg'", function () {
        return imageprocessor_1.default.resizeImage("fjord", 555, 555)
            .then(function (result) {
            expect(fs_1.default.existsSync(result)).toBeTrue();
        });
    });
    it("should return cached path for requested image", function () {
        return imageprocessor_1.default.resizeImage("fjord", 555, 555)
            .then(function (result) {
            expect(result).toContain("cached/fjord_555x555.jpg");
        });
    });
    it("should return an error when source image not on server", function () {
        return imageprocessor_1.default.resizeImage("fjord_fake", 555, 555)
            .catch(function (err) {
            expect(err).toBe("Requested Image (fjord_fake.jpg) does not exist on the server.");
        });
    });
});
