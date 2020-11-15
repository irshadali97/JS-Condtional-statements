console.log("Evaluating using if else if") ;
let percentage=85
 if (percentage<35) {
     console.log("Fail") ;
 }
 else if ((percentage>=40) && (percentage<60)) {
     console.log("Second Class");
 }
 else if ((percentage>=60) && (percentage<75)) {
     console.log("First Class");
 }
 else if (percentage>=75) {
     console.log("Distintion");
 }
 else {
     console.log("Just pass");
 }

 console.log("Evaluating using switch")
 var marks = 25;
 switch(true) {
    case marks < 35:
       console.log("Fail");
   break;
   case marks ==35:
       console.log("Just Pass");
   break;
   case marks < 60:
       console.log("Second Class");
   break;
   case marks < 75:
       console.log("First Class");
   break;
   default:
      console.log("Distinction")
      break;
 }
 