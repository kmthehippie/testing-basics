const capitalize = require('./capitalize')

test(('capitalize the text'), ()=>{
    expect(capitalize("heaven")).toBe("Heaven")
})

test(('ignore digits and returns digits with text'), ()=>{
    expect(capitalize("0123heaven")).toBe("0123Heaven")
})

