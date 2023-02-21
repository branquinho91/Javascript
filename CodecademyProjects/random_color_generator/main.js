// This variable stores the "Pick a Color" button
const button = document.getElementById("color-button");

// This variable stores the "Mystery Color" button
const mysteryButton = document.getElementById("next-button");

// This random number function will create color codes for the randomColor variable
const colorValue = () => Math.floor(Math.random() * 256);

// This function serves as the event handler function
const colorChange = (event) => {
  const randomColor = "rgb(" + colorValue() + "," + colorValue() + "," + colorValue() + ")";
  event.target.style.backgroundColor = randomColor;
}

button.addEventListener("click", colorChange);
mysteryButton.addEventListener("wheel", colorChange);
