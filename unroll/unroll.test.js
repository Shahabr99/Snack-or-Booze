const unroll = require("./unroll");

describe("#unroll", function () {
  

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

  it("should return unrolled array", function() {
    let squareArray = [
      [1,2,3,4],
      [5,6,7,8],
      [9,10,11,12],
      [13,14,15,16]
    ]

    const result = unroll(squareArray)
    expect(result).toEqual([1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10])
  })

  it("should return null if one array is empty", function() {
    let emptyArray = [
      [1,2,3,4],
      [5,6,7,8],
      []
    ]

    const result = unroll(emptyArray)
    expect(result).toBe(null)
  })
});
