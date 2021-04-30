import imageProcessor from "../utilities/imageprocessor";
import fs from "fs";

const testImagePath = "./images/cached/fjord_555x555.jpg";
beforeAll(() => {
    if(fs.existsSync(testImagePath)){
        fs.unlinkSync(testImagePath);
    }
});

describe("Test Image Existence, Processing and Creation", () => {

    it("Should create a file called 'fjord_555x555.jpg'", () => {
        return imageProcessor.resizeImage("fjord", 555, 555)
        .then(result => {
            expect(fs.existsSync(result)).toBeTrue();
        });
    });

    it("should return cached path for requested image", () => {
        return imageProcessor.resizeImage("fjord", 555, 555)
            .then(result => {
                expect(result).toContain("cached/fjord_555x555.jpg");
            });
    });

    it("should return an error when source image not on server", () => {
        return imageProcessor.resizeImage("fjord_fake", 555, 555)
        .catch(err => {
            expect(err).toBe("Requested Image (fjord_fake.jpg) does not exist on the server.");
        });
    });

});