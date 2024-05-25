let str = prompt("strning typedagi malumot kiriting");
console.log(`Sizning yoshingizni ${str} ga teng`)


let num = +prompt("number typedagi malumot kiriting");
console.log(`Sizning numberingiz ${num} ga teng`)


let bool = prompt("boolean typedagi malumot kiriting");
bool = Boolean(bool)
console.log(`Sizning  ${bool} ga teng`)


alert(
    `siz kiritgan ${str} malumot turi ${typeof str} ga tegishli \n
siz kiritgan ${num} malumot turi ${typeof num} ga tegishli \n
siz kiritgan ${bool} malumot turi ${typeof bool} ga tegishli \n`
)