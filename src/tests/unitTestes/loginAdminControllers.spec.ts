import supertest from "supertest";
import jwt from "jsonwebtoken";

import { app } from "../../app";
import { passwordJwt } from "../../config/authConfig";

describe("Test loginAdminController", () => {
  it("should return a token when valid credentials are provided", async () => {
    const credentials = {
      username: "Leonhard Euler",
      password: "2.718",
    };

    const response = await supertest(app)
      .post("/login/admin")
      .send(credentials);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("token");

    if (response.body.token) {
      const decoded = jwt.verify(response.body.token, passwordJwt);
      expect(decoded).toHaveProperty("username", credentials.username);
    }
  });

  it("should return an error when invalid credentials are provided", async () => {
    const invalidCredentials = {
      username: "Invalid",
      password: "Invalid",
    };

    const response = await supertest(app)
      .post("/login/admin")
      .send(invalidCredentials);

    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty("message");
  });
});
