console.log("Starting javascript");

var myName="Leo";
    console.log(myName);
var age=25;
    console.log(age);
var ignasiAge=32;

var ageDiff=age-ignasiAge;
    console.log(ageDiff);
    
if(age>=21) {
    console.log("You are older than 21");
}
else{
    console.log("You are not older than 21");
}

if (age<ignasiAge) {
    console.log("Ignasi is older than you");
}
else if(age>ignasiAge) {
    console.log("Ignasi is younger than you");
}
else{
    console.log("You have the same age as Ignasi");
}
   
var partners=['Franco','Gonzalo','Ivo','Mateo','Pedro','Soledad','Federico','Claudio','Alejandro'];
partners.sort();
console.log(partners[0]);
console.log(partners[8]);
for(var i=0;i<partners.length;i++) {
    console.log(partners[i]);
}


var ages=[25, 29, 32, 23, 24, 21, 35, 26, 30];
for(var y=0;y<ages.length; y++) {
    if ((ages[y] % 2) === 0) {
        console.log(ages[y]);
   
}
}

function ages
