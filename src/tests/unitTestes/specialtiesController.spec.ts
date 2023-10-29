import { app } from "../../app";
import supertest from "supertest";

describe("Specialties listing route test", () => {
  it("should return an array without the 'value' column", async () => {
    const res = await supertest(app).get("/specialties");

    expect(Array.isArray(res.body)).toBe(true);

    if (Array.isArray(res.body)) {
      res.body.forEach((item) => {
        expect(item).not.toHaveProperty("value");
      });
    }
  });
});
