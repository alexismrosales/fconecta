import database from "./database";

describe("Database connection test", () => {
  it("Trying connection with azure", async () => {
    try {
      await database.execQuery("DELETE FROM XD;"
        + "INSERT INTO XD (xd) VALUES(2);")
      expect(true).toBe(true)
    } catch (err) {
      console.log("Error executing Querys")
      expect(false).toBe(true)
    }
  }, 90 * 1000)
})
