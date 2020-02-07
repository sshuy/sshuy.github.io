let myImage = document.querySelector("img");
myImage.onclick = function() {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "/images/cuckoo-logo.png") {
    myImage.setAttribute("src", "/images/cuckoo-logo.jpg");
  } else {
    myImage.setAttribute("src", "/images/cuckoo-logo.png");
  }
};

let myButton = document.querySelector(".change-user");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("Please enter your name.");
  if (!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "Welcome to Cuckoos " + myName + "!";
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Welcome to Cuckoos " + storedName + "!";
}

myButton.onclick = function() {
  setUserName();
};
