var saveBtns = document.querySelectorAll("btn");
var currentTime = moment().hours();
console.log(currentTime);
timeBlock();

function createApp(e) {
  console.log(e.currentTarget.id);
  var textInput = e.currentTarget.id;
  textInput = textInput.split("-")[1];
  console.log(textInput);
  var messageInput = document.getElementById(textInput);
  console.log(messageInput.value);
  var store = {
    time: textInput,
    msg: messageInput.value,
  };
  localStorage.setItem(textInput, messageInput.value);
}
function timeBlock() {
  var timeBlocks = document.querySelectorAll(".time");
  console.log(timeBlocks);

  for (var i = 0; i < timeBlocks.length; i++) {
    console.log(timeBlocks[i].id);

    if (currentTime < timeBlocks[i].id) {
      timeBlocks[i].classList.add("future");
    } else if (currentTime === timeBlocks[i].id) {
      timeBlocks[i].classList.add("present");
    } else {
      timeBlocks[i].classList.add("past");
    }
  }
}
document.getElementById("07").value = localStorage.getItem("07");
document.getElementById("08").value = localStorage.getItem("08");
document.getElementById("09").value = localStorage.getItem("09");
document.getElementById("10").value = localStorage.getItem("10");
document.getElementById("11").value = localStorage.getItem("11");
document.getElementById("12").value = localStorage.getItem("12");
document.getElementById("13").value = localStorage.getItem("13");
document.getElementById("14").value = localStorage.getItem("14");
document.getElementById("15").value = localStorage.getItem("15");
document.getElementById("16").value = localStorage.getItem("16");
document.getElementById("17").value = localStorage.getItem("17");

document.querySelectorAll(".btn").forEach((item) => {
  item.addEventListener("click", createApp);
  $("#currentDay").text(moment().format("dddd, MMMM Do"));
});
