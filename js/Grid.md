# Grid Class Doc

This class is meant to deal with the memory game grid throw simple functions, without lots of complications.

| Method | Return type | Description
|--------|-------------|------------
| [Grid](#grid)(rows, columns) | Grid object | Returns an object of type Grid.
| [getColumns](#get-columns)() | Number | Returns the number of columns in the grid.
| [getRows](#get-rows)() | Number | Returns the number of rows in the grid.
| [getElement](#get-element)(row, column) | String | Returns the specified element by row and column in the grid.
| [drawGrid](#draw-grid)(callback) | undefined | Draws the whole grid by drawing each element using a callback function.


## [Grid](#grid)
Returns an object of type Grid.
#### Syntax
```javascript
let grid = new Grid(rows, columns);
```
#### `rows`
The number of rows of the new Grid.
#### `columns`
The number of columns in the new Grid.


## [getColumns](#get-columns)
Returns the number of columns in the grid.
#### Syntax
```javascript
let grid = new Grid(rows, columns);
console.log(grid.getColumns());
```

## [getRows](#get-rows)
Returns the number of rows in the grid.
#### Syntax
```javascript
let grid = new Grid(rows, columns);
console.log(grid.getRows());
```

## [getElement](#get-element)
Returns the specified element (The name of the image) by row and column in the grid.
#### Syntax
```javascript
let grid = new Grid(rows, columns);
console.log(grid.getElement(row, column));
```
#### `row`
The row number of the element you want to get.
#### `column`
The column number of the element you want to get.

## [drawGrid](#draw-grid)
Draws the whole grid by drawing each element using a callback function.
#### Syntax
```javascript
let grid = new Grid(rows, columns);

function callback(element) {
    console.log(element);
}

grid.drawGrid(callback);
```
#### `callback`
Function that is called for every element of `grid` and it's meant to draw a single item.
