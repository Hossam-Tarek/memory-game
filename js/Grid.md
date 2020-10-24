# Grid Class Doc

This class is meant to deal with the memory game grid throw simple functions, without lots of complications.

| Method | Return type | Description
|--------|-------------|------------
| [Grid](#grid)(rows, columns) | Grid object | Returns an object of type Grid.
| [getColumns](#getcolumns)() | Number | Returns the number of columns in the grid.
| [getRows](#getrows)() | Number | Returns the number of rows in the grid.
| [getElement](#getelement)(row, column) | String | Returns the specified element by row and column in the grid.
| [forEach](#foreach)(callback) | undefined | Executes a provided function once for each grid element.


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


## [getColumns](#getcolumns)
Returns the number of columns in the grid.
#### Syntax
```javascript
let grid = new Grid(rows, columns);
console.log(grid.getColumns());
```

## [getRows](#getrows)
Returns the number of rows in the grid.
#### Syntax
```javascript
let grid = new Grid(rows, columns);
console.log(grid.getRows());
```

## [getElement](#getelement)
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

## [forEach](#foreach)
Executes a provided function once for each grid element.
#### Syntax
```javascript
let grid = new Grid(rows, columns);

function callback(element[, row, column]) {
    console.log(element);
}

grid.forEach(callback);
```
#### `callback`
Function that is called for every element in the `grid`.
#### `row` `optional`
The row number of the current element.
#### `column` `optional`
The column number of the current element.
