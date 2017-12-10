/* Create a `myName` variable and assign it a String value */
var myName= "Nick";
/* Create a `person` variable and give it 2 properties,
 * `name`, assign it the same name as before,
 * as well as an `age` (number);
 */
var person = {
	name:"Nick",
	age: 26
};
/* Create a variable called `canDrive`,
 * if it should be true if your person object is at least 16 years old
 */
 var canDrive;
 if( person.age >= 16){
 	canDrive = true;
 }
 console.log(canDrive);

/* Create a function called `greet`,
 * it should take a 1 parameter, `name`
 * and it should print "Hello, my name is {name}"
 */

function greet(name){
 	alert("Hello, my name is " + person.name);
 }


greet();
/* Create an array called `dataTypes` with atleast 1 of every data type;
 * (there are 6 different data types);
 */

 var dataTypes=["str",5,false,["arr"],undefined,null];

/* Create a `dog` object
 * it should have a `bark` function that makes your dog bark!
 * It should also have a name attribute with the value of 'Spot'
 */
var dog={
	name:"Spot"
};

function speak(){
	var request = prompt("type speak");
		if(request.toLowerCase()==="speak"){
			alert("Arf-Arf!");
		}
};
speak();