const data = require('./MOCK_DATA');

// 1

function numberOfFemales(arrayOfObjects){
   return arrayOfObjects.reduce((counter, object)=>(object.gender ==='Female') ? counter+=1 : counter, 0);
}

//---------------------------------------------------------------------------------------------------------------------------------------------
// 2

function peopleOlderThan35(arrayOfObjects){
    return arrayOfObjects.filter(o => o.age > 35).map(o => {return {
        firstName: o.first_name,
        lastName: o.last_name
    }});
 }

//---------------------------------------------------------------------------------------------------------------------------------------------
// 3

function totalAge(i){
    return i.reduce((counter, object) => counter+= object.age, 0);

}

//---------------------------------------------------------------------------------------------------------------------------------------------
// 4

function averageAge(i){
    const numberOfObjects =  i.reduce((counter, object)=> counter+=1, 0);
    return i.reduce((counter, object) => counter+= object.age/numberOfObjects, 0);
    
}


//---------------------------------------------------------------------------------------------------------------------------------------------
// 5

function nameOfMales(arrayOfObjects){
    return arrayOfObjects.filter(o => o.age > 22 && o.age <44 && (o.first_name.charAt(0) === "L" || o.last_name.charAt(0) === "L"))
    .map(o => {return { firstName: o.first_name, lastName: o.last_name}});
 }

//---------------------------------------------------------------------------------------------------------------------------------------------
// 6

 function nameOfGovEmails(arrayOfObjects){
    return arrayOfObjects.filter(o => o.email.charAt(o.email.length-1) === 'v' || o.email.charAt(o.email.length-4) === 'v' )
    .map(o => {return { firstName: o.first_name, lastName: o.last_name, ip_address: o.ip_address}});
 }
 
//---------------------------------------------------------------------------------------------------------------------------------------------
module.exports = {nameOfGovEmails, numberOfFemales, averageAge};
