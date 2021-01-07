/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(string){
    let hrs = parseInt(string.split(":"))
//    let min = parseInt(string.split(":")[1])
      if ( hrs <= 11 ){
        console.log("Good Morning")
        return "Good Morning"        
      } else if (hrs <= 16){
        console.log("Good Afternoon")
        return "Good Afternoon"
      } else {
        console.log("Good Evening")
        return "Good Evening"
      }
    // console.log(hrs)
//    console.log(min)
}

function displayMessage(string){
    let tag = document.getElementById('greeting')
    tag.innerText = string
}