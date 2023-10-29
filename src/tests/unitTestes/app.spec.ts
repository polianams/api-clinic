import { app } from "../../app";
import supertest from "supertest";

describe("Teste my app server", () => {
  it("should get main route", async () => {
    const res = await supertest(app).get("/");

    expect(res.body).toHaveProperty("message");
  });
});
