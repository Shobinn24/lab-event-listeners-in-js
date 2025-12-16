// Handle Button Clicks
// Function to change the background color when a button is clicked
// Implement the function to change background color       
function changeBackgroundColor() {
 const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`; 
}
// Implement the function to reset background color
function resetBackgroundColor() {
  document.body.style.backgroundColor = '';
}

// Capture Keyboard Input
// Implement the function to display key pressed
function displayKeyPress(event) {
  const keyPressDisplay = document.getElementById('keyPressDisplay');
  if (keyPressDisplay) {
  keyPressDisplay.textContent = `Key pressed: ${event.key}`;
  keyPressDisplay.style.fontWeight = 'bold';
  keyPressDisplay.style.color = 'blue';

  setTimeout(() => {
    keyPressDisplay.style.fontWeight = 'normal';
    keyPressDisplay.style.color = 'black';
  }, 500);
}
}
// Process Text Input
function displayUserInput() {
  const textInput = document.getElementById('textInput');
  const textInputDisplay = document.getElementById('textInputDisplay');
  if (textInput && textInputDisplay) {  
    const text = textInput.value;
    
    if (text) {
      textInputDisplay.textContent = `You typed: ${text}`; 
      textInputDisplay.style.color = 'green';
    }
  }
}

// Mouse Hover Events
function handleMouseOver() {
  const hoverBox = document.getElementById('hoverBox');
  if (hoverBox) {
  hoverBox.style.backgroundColor = 'yellow';
  hoverBox.textContent = 'You are hovering over me!';
  hoverBox.style.transform = 'scale(1.1)';
  hoverBox.style.boxShadow = `0 8px 16px rgba(0, 0, 0, 0.3)`;
}
}
function handleMouseOut() {
  const hoverBox = document.getElementById('hoverBox');
  if (hoverBox) {
  hoverBox.style.backgroundColor = 'lightgray';
  hoverBox.textContent = 'Hover over me!';
  hoverBox.style.transform = 'scale(1)';
  hoverBox.style.boxShadow = 'none';
}
}
// Handle Form Submission
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent the default form submission behavior
  const textInput = document.getElementById('textInput');
  const submitDisplay = document.getElementById('submitDisplay');
  if (textInput && submitDisplay) {
  const submittedText = textInput.value;
  submitDisplay.textContent = `Form submitted with input: ${submittedText}"`;
  submitDisplay.style.color = 'green';
}
}
// Attach Event Listeners
function setupEventListeners() {
// Button click event listeners
const changeColorButton = document.getElementById('changeColorButton');
  if (changeColorButton) {
    changeColorButton.addEventListener('click', changeBackgroundColor);
  }

  const resetColorButton = document.getElementById('resetColorButton');
  if (resetColorButton) {
    resetColorButton.addEventListener('dblclick', resetBackgroundColor);
  }
  // Keyboard event listener
  document.addEventListener('keydown', displayKeyPress);
 // Input event
  const textInput = document.getElementById('textInput');
  if (textInput) {
    textInput.addEventListener('input', displayUserInput);
  }

  // Mouse events 
  const hoverBox = document.getElementById('hoverBox');
  if (hoverBox) {
    hoverBox.addEventListener('mouseover', handleMouseOver);
    hoverBox.addEventListener('mouseout', handleMouseOut);
  }

  // Form submit event 
  const userForm = document.getElementById('userForm');
  if (userForm) {
    userForm.addEventListener('submit', handleFormSubmit);
  }
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners)
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
  handleMouseOver,
  handleMouseOut,
  handleFormSubmit
}