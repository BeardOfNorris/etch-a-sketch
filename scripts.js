function getRandomRgbColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

const increaseBoxAmount = function (size) {
  for (let i = 0; i < size * size; i++) {
    const boxWidthHeight = 800 / size;
    let box = document.createElement("div");
    box.style.height = boxWidthHeight + "px";
    box.style.width = boxWidthHeight + "px";
    box.style.boxSizing = "border-box";
    const randomRgb = getRandomRgbColor();
    box.addEventListener("mouseover", () => {
      box.style.backgroundColor = randomRgb;
    });
    document.getElementById("container").appendChild(box);
  }
};

const changeSizeButton = document.getElementById("size-button");
changeSizeButton.addEventListener("click", () => {
  const size = prompt("Enter your desired grid size");
  const sizeConverted = Number(size);
  if (Number.isNaN(sizeConverted) || sizeConverted < 1 || sizeConverted > 100) {
    alert("Please provide a number between 1-100");
  }
  document.getElementById("container").innerHTML = "";
  increaseBoxAmount(size);
});

const clearColor = document.getElementById("clear-color");
clearColor.addEventListener("click", () => {
  document.querySelectorAll("#container div").forEach((div) => {
    div.style.backgroundColor = "white";
  });
});
