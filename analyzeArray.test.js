const analyzeArray = require('./analyzeArray')

test(("analyze [1,8,3,4,2,6]"),()=>{
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({average: 4, min: 1, max: 8, length: 6})
})

test(("analyze [1,2,3,4,5,6,7]"),()=>{
    expect(analyzeArray([1,2,3,4,5,6,7])).toEqual({average: 4, min: 1, max: 7, length: 7})
})

test(("analyze [9,10,11,12,13,14]"),()=>{
    expect(analyzeArray([9,10,11,12,13,14])).toEqual({average: 11, min: 9, max: 14, length: 6})
})

test((`analyze [9,10,11,12,"text here","14"]`),()=>{
    expect(analyzeArray([9,10,11,12,"text here","14"])).toBe("Item in array is Not a Number")
})
test('array-like object (string)', () => {
    expect(analyzeArray('12345')).toBe("Item in array is Not a Number");
  });