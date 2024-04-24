const checkButton = document.querySelector("#check-btn");
const textInput = document.querySelector("#text-input");
const resultDiv = document.querySelector("#result");

checkButton.onclick = checkPalindrome;

function checkPalindrome() {
  const inputValue = textInput.value.trim();

  resultDiv.classList.remove("hidden");

  if (inputValue === "") {
    resultDiv.classList.add("hidden");
    return alert("Please input a value");
  }

  const newText = inputValue.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversedText = newText.split("").reverse().join("");

  if (reversedText === newText)  {    
    resultDiv.innerHTML = `${inputValue} <strong>is</strong> a palindrome.`;
  } else {
    resultDiv.innerHTML = `${inputValue} is <strong>not</strong> a palindrome.`;
  }
}
