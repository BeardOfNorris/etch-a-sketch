function getRandomRgbColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

const increaseBoxAmount = function (size) {
  for (let i = 0; i < size * size; i++) {
    const boxWidthHeight = 960 / size;
    let box = document.createElement("div");
    box.style.border = "solid, red, 1px";
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
  document.getElementById("container").innerHTML = "";
  increaseBoxAmount(size);
});
