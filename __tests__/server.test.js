const server = require("../backend/app");
const supertest = require("supertest");
const requestWithSupertest = supertest(server);

describe("Summon Endpoint", () => {
  it("GET /api/summon contains card0", async () => {
    const res = await requestWithSupertest.get("/api/summon");
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining("json"));
    expect(res.body).toHaveProperty("card0");
  });

  it("GET /api/summon contains card9", async () => {
    const res = await requestWithSupertest.get("/api/summon");
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining("json"));
    expect(res.body).toHaveProperty("card9");
  });

  it("GET /api/ doesn't work", async () => {
    const res = await requestWithSupertest.get("/api/");
    expect(res.status).toEqual(404);
  });

  it("GET / doesn't work", async () => {
    const res = await requestWithSupertest.get("/api/");
    expect(res.status).toEqual(404);
  });
});
