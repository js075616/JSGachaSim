const server = require("../backend/app");
const supertest = require("supertest");
const requestWithSupertest = supertest(server);

describe("Summon Endpoint", () => {
  it("GET /api/summon", async () => {
    const res = await requestWithSupertest.get("/api/summon");
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining("json"));
    expect(res.body).toHaveProperty("message");
  });
});
