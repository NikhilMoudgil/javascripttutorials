//for each 
const lang= ["JS","ruby","Java","CPP"]
//callback function
lang.forEach(function(item){
    console.log(item);
}     
 )
 //another variant-> arraw function
 lang.forEach((item)=>{ console.log(item);})
 // function calling for already declared function in foreach
 function printme(item){
    console.log(item);
 }

 lang.forEach(printme)

// NOT_> Other access through forEach- forEach can access - index , arr and values of array
//objects inside array  in forEach
const mylang=[
    {
        langName: "JavaScript",
        filename: "Js"
    },
      {
        langName: "CPP",
        filename: "cpp"
    }
]
mylang.forEach((item)=>{
    console.log(`${item.langName} , language FIle name ${item.filename}`);
})