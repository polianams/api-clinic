import supertest from "supertest";
import jwt from "jsonwebtoken";
import { passwordJwt } from "../../config/authConfig";
import { app } from "../../app";

describe("Test loginAdminController", () => {
  it("should return a token when valid credentials are provided", async () => {
    const credentials = {
      username: "euler",
      password: "2.71828",
    };

    const response = await supertest(app)
      .post("/login/admin")
      .send(credentials);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("token");

    const decodedToken = jwt.verify(response.body.token, passwordJwt);
    expect(decodedToken).toHaveProperty("username", credentials.username);
  });
});
