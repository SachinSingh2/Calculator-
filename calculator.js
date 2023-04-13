// //Today we are going to create a caluclator with the help of Html,CSS,JS




//First we have taked the screen with the help of getElement id 
let screen = document.getElementById("Screen");

// Then we have selecter all the button with the help of queryselector
let c = document.querySelectorAll("button");

//Here we have created a variable in which later we are going to put the values
let screenValue = "";

//Then we have used the for of loop to take all the buttons and put an event listner on them.
for (value of c) {
  value.addEventListener("click", (e) => {
    // console.log("Working FINE")
    let  buttonText = e.target.innerText; // Here we have created a buttonText variable and declate the (e) which is the value of button (e)'s innerText valued assigned to the buttonText .  
    console.log(buttonText);

    // Now we will writet the logic here

    //Out first logic is if we are going to press 'X' . Its value should change to *
    if (buttonText == "x") {
      buttonText += "*";

      screenValue += buttonText;  //Here the empty screenvalue we have lefted  we are addind the in them the buttonText(Which are the values of the button which is given them in html)

      screen.value = screenValue;  //Here the screen.value(value of the screen) is should be equalto screenalue which we have declared ButtonText .



    //  This second logic is to evaluate the value . Means if we click the '=' the enterd value of in the screen should evaluate means solved
    } else if (buttonText == "=") {
      screen.value = eval(screenValue);  //Here if we click  buttonText = then the below given things should take place  
      //  Writing a program by which the value store in localstorage
      localStorage.setItem("key", `${eval(screenValue)}`);  //Here the evaluate values are going into the localstorage so we can get them back.later if we press MR Button
      screenValue = "";
    } else if (buttonText == "C") {
      screenValue = ""; //This is too clear the screen
      screen.value = screenValue;
    } else if (buttonText == "MR") {
      let getedValue = localStorage.getItem("key"); //This is too get the Mr from the local storage
      console.log(getedValue);
      screen.value = getedValue;
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}
