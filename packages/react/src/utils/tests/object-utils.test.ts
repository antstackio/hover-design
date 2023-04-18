import { describe, test, expect } from "vitest";
import { eliminateUndefinedKeys } from "../object-utils";
describe("Object Utils Test", () => {
  test("should eliminate undefined keys", () => {
    const record = { a: 1, b: undefined, c: 3 };
    const eliminated = eliminateUndefinedKeys(record);
    expect(eliminated).toEqual({ a: 1, c: 3 });
  });
});
