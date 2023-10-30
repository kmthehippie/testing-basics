const reverseString = require('./reverseString')

test(('reverse string hello'), ()=>{
    expect(reverseString("hello")).toBe("olleh")
})

test(('reverse string howdy'), ()=>{
    expect(reverseString("Howdy")).toBe("ydwoH")
})

test(('reverse string Greetings from Earth'), ()=>{
    expect(reverseString("Greetings from Earth")).toBe("htraE morf sgniteerG")
})