import { app } from "../app";
const supertest = require("supertest");

describe("Teste my app server", () => {
  it("should get main route", async () => {
    const res = await supertest(app).get("/");

    expect(res.body).toHaveProperty("message");
  });
});
