const calculator = require('./calculator')


test(("calculate 2+2 = 4"),()=>{
    expect(calculator(2,2,"+")).toBe(4)
})

test(("calculate 2-2 = 0"),()=>{
    expect(calculator(2,2,"-")).toBe(0)
})

test(("calculate 2*2 = 4"),()=>{
    expect(calculator(2,2,"*")).toBe(4)
})

test(("calculate 2/2 = 1"),()=>{
    expect(calculator(2,2,"/")).toBe(1)
})

