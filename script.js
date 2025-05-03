const sentences = [
  "The quick brown fox jumps over the lazy dog.",
  "Python is a versatile programming language.",
  "Practice makes perfect in typing speed tests.",
  "Always strive to improve your typing accuracy.",
];

let currentSentence = "";
let startTime = 0;
let interval;

// DOM Elements
const sentenceElement = document.getElementById("sentence");
const userInput = document.getElementById("user-input");
const startButton = document.getElementById("start-btn");
const results = document.getElementById("results");
const timeTakenElement = document.getElementById("time-taken");
const wpmElement = document.getElementById("wpm");
const accuracyElement = document.getElementById("accuracy");

// Start the test
startButton.addEventListener("click", () => {
  startButton.disabled = true;
  userInput.disabled = false;
  userInput.value = "";
  results.hidden = true;
  startTime = Date.now();
  currentSentence = sentences[Math.floor(Math.random() * sentences.length)];
  sentenceElement.textContent = currentSentence;
  userInput.focus();
});

// Check typing accuracy and calculate results
userInput.addEventListener("input", () => {
  if (userInput.value === currentSentence) {
    const elapsedTime = (Date.now() - startTime) / 1000;
    const wordCount = currentSentence.split(" ").length;
    const accuracy = calculateAccuracy(currentSentence, userInput.value);
    const wpm = Math.round((wordCount / elapsedTime) * 60);

    // Display results
    results.hidden = false;
    timeTakenElement.textContent = elapsedTime.toFixed(2);
    wpmElement.textContent = wpm;
    accuracyElement.textContent = `${accuracy.toFixed(2)}%`;

    userInput.disabled = true;
    startButton.disabled = false;
  }
});

// Function to calculate typing accuracy
function calculateAccuracy(expected, actual) {
  let correct = 0;
  for (let i = 0; i < expected.length; i++) {
    if (expected[i] === actual[i]) correct++;
  }
  return (correct / expected.length) * 100;
}
//Recently added:
const sentences = [
  "The quick brown fox jumps over the lazy dog.",
  "Python is a versatile programming language.",
  "Practice makes perfect in typing speed tests.",
  "Always strive to improve your typing accuracy.",
];

let currentSentence = "";
let startTime = 0;

// DOM Elements
const sentenceElement = document.getElementById("sentence");
const userInput = document.getElementById("user-input");
const startButton = document.getElementById("start-btn");
const results = document.getElementById("results");
const timeTakenElement = document.getElementById("time-taken");
const wpmElement = document.getElementById("wpm");
const accuracyElement = document.getElementById("accuracy");

// Smooth animation for background and text color
function applySmoothHighlight(element, color) {
  gsap.to(element, {
    backgroundColor: color,
    duration: 0.3,
    ease: "power2.inOut",
  });
}

// Start the test
startButton.addEventListener("click", () => {
  startButton.disabled = true;
  userInput.disabled = false;
  userInput.value = "";
  results.hidden = true;

  startTime = Date.now();
  currentSentence = sentences[Math.floor(Math.random() * sentences.length)];
  sentenceElement.textContent = currentSentence;

  // Apply initial color
  applySmoothHighlight(sentenceElement, "#1E3A8A");
  userInput.focus();
});

// Check typing accuracy and calculate results
userInput.addEventListener("input", () => {
  const typedText = userInput.value;

  // Highlight accuracy feedback
  if (currentSentence.startsWith(typedText)) {
    applySmoothHighlight(sentenceElement, "#1E3A8A"); // Correct input
  } else {
    applySmoothHighlight(sentenceElement, "#7F1D1D"); // Incorrect input
  }

  if (typedText === currentSentence) {
    const elapsedTime = (Date.now() - startTime) / 1000;
    const wordCount = currentSentence.split(" ").length;
    const accuracy = calculateAccuracy(currentSentence, typedText);
    const wpm = Math.round((wordCount / elapsedTime) * 60);

    // Display results
    results.hidden = false;
    timeTakenElement.textContent = elapsedTime.toFixed(2);
    wpmElement.textContent = wpm;
    accuracyElement.textContent = `${accuracy.toFixed(2)}%`;

    userInput.disabled = true;
    startButton.disabled = false;
  }
});

// Function to calculate typing accuracy
function calculateAccuracy(expected, actual) {
  let correct = 0;
  for (let i = 0; i < expected.length; i++) {
    if (expected[i] === actual[i]) correct++;
  }
  return (correct / expected.length) * 100;
}
