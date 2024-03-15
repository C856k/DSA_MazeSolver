async function loadMaze(filename) {
    const response = await fetch(filename);
    const data = await response.json();
    return data;
}

function displayMaze(mazeData) {
    const mazeContainer = document.querySelector('.maze-container');
    mazeContainer.innerHTML = '';

    const {rows, cols, start, goal, maze} = mazeData;

    const mazeGrid = document.createElement('div');
    mazeGrid.classList.add('maze');
    mazeGrid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

    maze.forEach(row => {
        row.forEach(cell => {
            const cellElement = document.createElement('div');
            cellElement.classList.add('cell');
            if (cell.row === start.row && cell.col === start.col) {
                cellElement.classList.add('start');
            } else if (cell.row === goal.row && cell.col === goal.col) {
                cellElement.classList.add('goal');
            }

            if (cell.north) {
                cellElement.classList.add('wall-north');
            }
            if (cell.east) {
                cellElement.classList.add('wall-east');
            }
            if (cell.south) {
                cellElement.classList.add('wall-south');
            }
            if (cell.west) {
                cellElement.classList.add('wall-west');
            }

            mazeGrid.appendChild(cellElement);
        });
    });

    mazeContainer.appendChild(mazeGrid);
}

function solveMaze(mazeData) {
    const { start, goal, maze } = mazeData;
    const route = [];
    const visited = new Set();

    function visitCell(row, col) {
        if (row < 0 || row >= maze.length || col < 0 || col >= maze[0].length || visited.has(`${row}-${col}`)) {
            return false;
        }

        const cell = maze[row][col];
        visited.add(`${row}-${col}`);
        route.push({ row, col });

        if (row === goal.row && col === goal.col) {
            return true;
        }

        const directions = ['north', 'east', 'south', 'west'];
        const offsets = [[-1, 0], [0, 1], [1, 0], [0, -1]];

        for (let i = 0; i < directions.length; i++) {
            const [offsetRow, offsetCol] = offsets[i];
            const nextRow = row + offsetRow;
            const nextCol = col + offsetCol;
            if (!cell[directions[i]]) {
                if (visitCell(nextRow, nextCol)) {
                    return true;
                }
            }
        }

        route.pop();
        return false;
    }

    visitCell(start.row, start.col);
    return route;
}

// Function to display route in maze
function displayRoute(route) {
    const mazeCells = document.querySelectorAll('.cell');
    const routePositions = new Set(route.map(cell => `${cell.row}-${cell.col}`));

    mazeCells.forEach((cell, index) => {
        const { row, col } = route[index];
        if (routePositions.has(`${row}-${col}`)) {
            cell.classList.add('route');
        }
    });
}

// Main function to load, solve, and display maze
async function main() {
    const mazeData = await loadMaze('maze.json');
    displayMaze(mazeData);
    const route = solveMaze(mazeData);
    displayRoute(route);
}

main();