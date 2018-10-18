function test1(){

var fName = prompt("You got a name?");
var myColour = prompt("Pick a color, " + fName);

  if (myColour == "red"){ 
    console.log("ha. this person likes red");
}

  else if(myColour == "green"){
    console.log("ah he likes green. he's alright")
}
}
  else if(myColour == "yellow"){
    console.log("ah he likes ittt. he's alright")
}  
else {console.log("thats not a colour")
}

function test2(){
  
  var age=prompt("how old are you")
  if(age < 14){
  alert("thats not too old")
  }
else if(age==14){
  alert("you have a good age")
}
else if(age > 14){
  alert("You're older than i thought")
}
  else{
  alert("you're an idiot")
  }
}
