const caesarCipher = require('./caesarCipher')


test(("Cipher defend the east wall of the castle"),()=>{
    expect(caesarCipher("defend the east wall of the castle")).toBe("efgfoe uif fbtu xbmm pg uif dbtumf")
})

test(("Cipher a to z"),()=>{
    expect(caesarCipher("a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z")).toBe("b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,a")
})

test(("Cipher DEFEND THE EAST WALL OF THE CASTLE"),()=>{
    expect(caesarCipher("DEFEND THE EAST WALL OF THE CASTLE")).toBe("EFGFOE UIF FBTU XBMM PG UIF DBTUMF")
})

test(("Cipher DEFEND !@#$%^&*() THE EAST WALL OF THE CASTLE"),()=>{
    expect(caesarCipher("DEFEND !@#$%^&*() THE EAST WALL OF THE CASTLE")).toBe("EFGFOE !@#$%^&*() UIF FBTU XBMM PG UIF DBTUMF")
})
