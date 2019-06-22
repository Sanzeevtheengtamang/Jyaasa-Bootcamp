let name= "+91-80"
let regEx= /^\+d{2}-d{2}$/g
let valid= name.match(regEx)
console.log(`${valid ? 'valid':'invalid'} ${name}`)