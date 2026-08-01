const name ="Nikhil"
const repocount = 50

//console,log(name + repocount + "Value") Obslated 
console.log(`hello my name is ${name} and my repocount is ${repocount}`);

const gameName = new String('solosync_MMT')
console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('o'));
//it give the part which is in argument
 const str2 =   gameName.substring(0,3)
 console.log(str2);
 // we can use -ve values in slice and slice removes the part given in argument
const str3 =   gameName.slice(-8,4)
 console.log(str3);
// trim removes the white spaces and Endlines
 const newstr1 = "    Nikhil  ";
 console.log(newstr1);
console.log(newstr1.trim());

// Replace
const url ="https://www.youtube%30com/"
console.log(url.replace('%30','.'));

// include 
console.log(url.includes('youtube'));
console.log(url.includes('nikhil'));
//split- it splits on the basis of argument 
console.log(gameName.split('_'));



