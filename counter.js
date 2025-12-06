let count = 0; // Initialize count

function displayCount() {
document.getElementById('countDisplay').innerHTML = count;
}

function checkCountValue() {
if (count === 10) {
alert("Your Instagram post gained 10 followers! Congratulations!");
} else if (count === 20) {
alert("Your Instagram post gained 20 followers! Keep it up!");
}
}

function increaseCount() {
count++;
displayCount();
checkCountValue();
}

function resetCount() {
  const confirmReset = confirm("Are you sure you want to reset the count?");
  if (confirmReset) {
    count = 0;
    displayCount();
    alert("Count has been reset to 0!");
  }
}
displayCount(); // Initial display

