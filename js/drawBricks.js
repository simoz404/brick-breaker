let bricksContainer = document.getElementById("bricks-container");
let id = 0
function drawBricks() {
scorep =0
  const colorList = [
    "red",
    "purple",
    "green",
  //  "blue",
    // "pink",
    // "yellow",
    "cyan",
  ];
  for (let index = 0; index < colorList.length; index++) {
    createBricks(colorList[index]);
  }
}

function createBricks(brickColor) {
  for (let index = 0; index < 8; index++) {
    let brick = document.createElement("div");
    let brickFace = document.createElement("div");
    let brickShadow = document.createElement("div");
    let crack = document.createElement('img')
    brick.id = id
    brick.classList.add(brickColor)
    brickFace.classList.add(brickColor)
    brickShadow.classList.add('brick-shadow')
    brickFace.classList.add('brick-face')
    brick.classList.add('brick');
    crack.src = './styles/crack.png'
    brick.appendChild(crack)
    brick.appendChild(brickFace);
    brick.appendChild(brickShadow);
    bricksContainer.append(brick);
    id++
  }
}
