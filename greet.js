// Kieran Dillon
// Greet function to return greeting
var greeting = "Hello";

function greet(name) {
  console.log(name);
  // deal with no name being provided
  if (name == null ){

     console.log(greeting + " there!");
     return (greeting + " there!");

  } else if (Array.isArray(name)) { //if  Array greet all members

      var len = name.length;
      console.log("array length = " + len)

      if (len == 2) {
          console.log(greeting + " " + name[0] + ", " + name[1]);
          return (greeting + " " + name[0] + ", " + name[1]);

      } else {
          let text = name.join(", ");
          console.log(text);
          return greeting + " " + text;

      } 
  } else if (name == name.toUpperCase()){ //shout greeting
  
         console.log(name == name.toUpperCase());
         console.log(greeting.toUpperCase() + " " + name + "!");
         return (greeting.toUpperCase() + " " + name + "!");

  } else { // normal greeting

    console.log(greeting + name)
    return greeting + " " + name;

  }

}
console.log(greet("JODY"));