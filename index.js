const user={
    age:20,
    name:`John Doe`
}
console.log(user.age);
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.seal(user));

let ar=[1,2,3,4,5];
console.log(ar.sort((a,b)=>a-b));