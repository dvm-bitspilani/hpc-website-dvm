function toggle1() {
    var button = document.getElementById("button-one");
    var x = document.getElementById("item-one");
    if (x.style.display === "none") {
        x.style.display = "flex";
        button.style.transform = "rotate(180deg)";
      } else {
        x.style.display = "none";
        button.style.transform = "rotate(0deg)";
      }
}

function toggle2() {
    var button = document.getElementById("button-two");
    var x = document.getElementById("item-two");
    if (x.style.display === "none") {
        x.style.display = "flex";
        button.style.transform = "rotate(-90deg)";
      } else {
        x.style.display = "none";
        button.style.transform = "rotate(0deg)";
      }
}

function toggle3() {
    var button = document.getElementById("button-three");
    var x = document.getElementById("item-three");
    if (x.style.display === "none") {
        x.style.display = "flex";
        button.style.transform = "rotate(-90deg)";
      } else {
        x.style.display = "none";
        button.style.transform = "rotate(0deg)";
      }
}

