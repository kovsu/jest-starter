import { sum } from "@/utils/sum";

describe("sum", function () {
  it("可以做加法", () => {
    expect(sum(1, 1)).toEqual(2);
  });
});
