var person = "Ahmad Rameez";
// Lower Case
console.log(person.toLowerCase());
// Upper Case
console.log(person.toUpperCase());
// Title Case
console.log(person.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
