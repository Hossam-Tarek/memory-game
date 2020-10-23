export default class Grid {
    #rows;
    #columns;
    #grid = [];
    #distinctElements;

    constructor(rows, columns) {
        this.#setRows(rows);
        this.#setColumns(columns);
        this.#checkDimensions();
        this.#generateGrid();
    }

    // Set the value of rows and ensures it can not be less than or equal to 0.
    #setRows(rows) {
        if (rows > 0) {
            this.#rows = rows;
            return;
        }
        throw new InvalidRowsNumber();
    }

    // Set the value of columns and ensures it can not be less than or equal to 0.
    #setColumns(columns) {
        if (columns > 0) {
            this.#columns = columns;
            return;
        }
        throw new InvalidColumnsNumber();
    }

    // Returns the number or rows in the grid.
    getRows() {
        return this.#rows;
    }

    // Returns the number of columns in the grid.
    getColumns() {
        return this.#columns;
    }

    // Returns the specified element by row and column in the grid.
    getElement(row, column) {
        return this.#grid[row][column];
    }

    // Checks if the total number of the elements in the grid i a even number.
    #checkDimensions() {
        if ((this.#rows * this.#columns) % 2 !== 0) {
            throw new InvalidDimensions();
        }
    }

    // Generates the grid array of random images.
    #generateGrid() {
        this.#distinctElements = Grid.#getDistinctArray(this.#rows * this.#columns / 2, 1, 21);

        for (let i = 0; i < this.#rows; i++) {
            this.#insertRow();
        }

        this.#grid = this.#grid.map( row => {
            return row.map( element => {
                return element + ".png";
            });
        });
    }

    // Returns an integer between the the specified range (min, max).
    static #randInt(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    // Returns an array of distinct values between two numbers
    static #getDistinctArray(length, min, max) {
        let arr = [];
        let num;

        while (arr.length !== length) {
            num = Grid.#randInt(min, max);

            if (!arr.includes(num)) {
                arr.push(num);
            }
        }

        return arr;
    }

    // Insert row of random data to the grid
    #insertRow() {
        let newRowIndex = this.#grid.length;
        this.#grid.push([]);
        let distinctNumIndex;
        let num;

        while (this.#grid[newRowIndex].length < this.#columns) {
            distinctNumIndex = Grid.#randInt(0, this.#distinctElements.length - 1);
            num = this.#distinctElements[distinctNumIndex];

            if (this.#numFrequencyInGrid(num) === 0) {
                this.#grid[newRowIndex].push(num);
            } else {
                this.#grid[newRowIndex].push(num);
                this.#distinctElements.splice(distinctNumIndex, 1);
            }
        }
    }

    // Returns the number of occurrences of a number in the grid
    #numFrequencyInGrid(num) {
        if (this.#grid.length === 0) {
            return 0;
        }

        let count = 0;
        let index = -1;
        for (let i = 0; i < this.#grid.length; i++) {
            do {
                index = this.#grid[i].indexOf(num, ++index);
                if (index !== -1) {
                    count++;
                }
            } while (index !== -1);
        }

        return count;
    }
}

class InvalidRowsNumber extends Error {
    constructor() {
        super("The number of rows must be a number greater than 0.");
        this.name = "InvalidRowsNumber";
    }
}

class InvalidColumnsNumber extends Error {
    constructor() {
        super("The number of columns must be a number greater than 0.");
        this.name = "InvalidColumnsNumber";
    }
}

class InvalidDimensions extends Error {
    constructor() {
        super("The total number of elements in a grid (rows*columns) must be an even number.");
        this.name = "InvalidDimensions";
    }
}
