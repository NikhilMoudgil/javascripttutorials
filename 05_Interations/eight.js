//Reduce(accumulator ) -> It basically gives the sum of digits of array
/*
const nums=[1,2,3,4,5,6]
const init=0
const output= nums.reduce(function(acc ,curval){
    console.log(`Accumulator ${acc} and currentValue: ${curval}`);
    return acc +curval
},0)

console.log(output);
// reduce using arrow function
const outPut= nums.reduce((acc,curval)=>acc+curval,0)
console.log(outPut);*/

const gamesCart=[
    {
        itemname:"NFS",
        price:300
    },
    {
        itemname:"GTA5",
        price:1000
    },
    {
        itemname:"HitMan",
        price:800
    }
]
const init=0
const totalBill= gamesCart.reduce((acc,item)=>acc+ item.price,0)
console.log(totalBill);
