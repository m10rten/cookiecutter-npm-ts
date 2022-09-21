import Index from "../src/index";

// Examples of how your tests could look like:
describe("index", () => {
  it("should return true", () => {
    expect(true).toBe(true);
  });
  it("should create a new index", () => {
    const index = new Index();
    expect(index).toBeInstanceOf(Index);
  });
});
