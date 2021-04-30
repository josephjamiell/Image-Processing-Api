import supertest from "supertest";
import app from "../index";

const request = supertest(app);
describe("Test endpoint responses", () => {
    it("should return 200 if endpoint is running", async () => {
        const response = await request.get("/");
        expect(response.status).toBe(200);
    });
    it("should return 500 if image parameters are not specified", async () => {
        const response = await request.get("/images");
        expect(response.status).toBe(500);
    });
    it("should return 200 if valid parameters are specified", async () => {
        const response = await request.get("/images?name=fjord&height=25&width=25");
        expect (response.status).toBe(200);
    });
    it("should return 500 if image is not found on server", async () => {
        const response = await request.get("/images?name=fjord_fake&height=25&width=25");
        expect (response.status).toBe(500);
    });
});