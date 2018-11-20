
function test1(){

  var fName = prompt("You got a name?");

  var myColour = prompt("Pick a color, " + fName);

  if (myColour == "red"){ 
    console.log("ha. this person likes red");
  }
  else if(myColour == "green"){
    console.log("ah he likes green. he's alright");
  }
  else if(myColour == "yellow"){
    console.log("ah they like ittt. They're alright");
  }  
  else {
    console.log("thats not a colour");
  }
}

function test2() {
  var age=prompt("how old are you");
  if(age < 14){
    alert("thats not too old");
  }
  else if(age==14){
    alert("you have a good age");
  }
  else if(age > 14){
    alert("You're older than i thought");
  }
  else{
    alert("you're an idiot");
  }
}

function test4(){ 
  var randomNum = Math.floor (Math.random()*1000 + 1); 
  var fnumber = prompt("Pick a number between 1 to 1000");
  console.log(randomNum);
  
    if(fnumber < randomNum){
    prompt("higher");
  }  
    else if( randomNum == fnumber){
      alert("correct!!!")
    }
    else if(fnumber > randomNum){
    prompt("lower");
  }
    else{ 
    alert("you're an idiot");
  }
}

function A4loops1(){
  for (var i=1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz"); 
    }
    else if (i % 3 === 0) {
      console.log("Fizz");
    }
    else if (i % 5 === 0) {
      console.log("Buzz");
    }
    else {
      console.log(i);
    }
}
}

function A4loops2(){
for (var i = 1; i < 8; i ++)

  if(i == 2) {
    console.log("**");
}
  else if(i == 3) {
    console.log("***");
}
  else if(i == 4) {
  console.log("****");
}
  else if(i == 5) {
    console.log("*****");
}
  else if(i == 6) {
    console.log("******");
}    
  else if(i == 7) {
    console.log("*******");
}
}

function vacay(){
const vacationSpots = ["Bermuda","Machu Pichu","Chile"] 
for (let i = 0; i < vacationSpots.length; i++){
alert(vacationSpots[i]); 
}
}





























