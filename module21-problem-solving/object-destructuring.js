let obj1 = {
    a:3,
    b:4,
    c:5
}
let {a, ... rest} = obj1;
console.log(rest);

// function myFunction(x, y) {
//     const { b, ...rest } = y;
//     return { ...x, ...rest, d: b };
//   }
//   console.log (myFunction({a:3,b:4},{b:3,c:1}))