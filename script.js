container = document.querySelector("#container");


let gridSize = 16;

function createGrid (gridSize) {

    let squareSize = (container.offsetWidth / gridSize);

    for (let i = 0; i < gridSize; i++) {

        const newContainer = document.createElement("div");
        newContainer.classList.add("outer");
        container.appendChild(newContainer);

        for (let z = 0; z < gridSize; z++) {

            const divs = document.createElement("div");
            divs.textContent = "";
            divs.classList.add("square");
            divs.style.width = `${squareSize}px`;
            divs.style.height = `${squareSize}px`;
            divs.addEventListener("mouseenter", () => {
                divs.style.backgroundColor = `rgb(${randomize()}, ${randomize()}, ${randomize()})`;
            });
            newContainer.appendChild(divs);
        }
    }
}

function randomize() {
    return(Math.floor(Math.random() * 255));
};

const button = document.querySelector("button");

button.addEventListener("click", () => {

    const wrapper = document.querySelector("#big");
    wrapper.removeChild(container)

    let newGrid = parseInt(prompt("Please Enter a new grid size # x #"));

    while (true) {

        if (newGrid > 100 || newGrid < 0 || Number.isNaN(newGrid)) {
            newGrid = parseInt(prompt("Pick a number greated than 0 or less than 100!"));
        } else {

            break;
        }
    }

    container = document.createElement("div");
    container.id = "container"
    wrapper.appendChild(container);

    createGrid(newGrid);
});



createGrid(gridSize);
