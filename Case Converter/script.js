const textArea = document.getElementById("text-area");
const upperCase = document.getElementById("upper-case");
const lowerCase = document.getElementById("lower-case");
const properCase = document.getElementById("proper-case");
const sentenceCase = document.getElementById("sentence-case");
const saveTextFile = document.getElementById("save-text-file");

upperCase.addEventListener("click", () => textArea.value = textArea.value.toUpperCase());

lowerCase.addEventListener("click", () => textArea.value = textArea.value.toLowerCase());

properCase.addEventListener("click", () => textArea.value = toProperCase(textArea.value));

sentenceCase.addEventListener("click", () => textArea.value = toSentenceCase(textArea.value));

saveTextFile.addEventListener("click", () => download(textArea.value));


function toProperCase(arr) {
  const words = arr.split(" ");
  words.forEach((word, index) => {
    words[index] =
    word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
  });
  return words.join(" ");
}

function toSentenceCase(arr) {
  const words = arr.split(". ");
  words.forEach((word, index) => {
    words[index] =
    word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
  });
  return words.join(". ");
}

function download(text) {

  let element = document.createElement("a");
  element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text));
  element.setAttribute("download", "text_converted.txt");

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
