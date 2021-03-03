// TODO: Create a constructor function called 'Developer' that takes in 'name' and 'tech'
function Developer (name, tech){
this.name = name;
this.tech = tech;
this.introduction = () =>{

    console.log("Hi I'm " + this.name + "." + "\n" + "My favorite tech is " + this.tech + ".");
    // console.log("My favorite tech is " + this.tech)

}

}
// TODO: Include a method called 'introduction()' that introduces the Developer with their name and favorite tech

// TODO: Create a new object using the 'Developer' constructor
const mark = new Developer("Mark" , "Cyber Security")

// TODO: Call the 'introduction()' method on the new object
mark.introduction();