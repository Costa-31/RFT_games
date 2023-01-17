'use strict';
        var canvas = document.querySelector('canvas');
        canvas.width = 640;
        canvas.height = 640;

        var g = canvas.getContext('2d');

        var right = { x: 1, y: 0 };
        var down = { x: 0, y: 1 };
        var left = { x: -1, y: 0 };

        var EMPTY = -1;
        var BORDER = -2;

        var fallingShape;
        var nextShape;
        var dim = 640;
        var nRows = 18;
        var nCols = 12;
        var blockSize = 30;
        var topMargin = 50;
        var leftMargin = 20;
        var scoreX = 400;
        var scoreY = 330;
        var titleX = 130;
        var titleY = 160;
        var clickX = 90;
        var clickY = 400;
        var previewCenterX = 467;
        var previewCenterY = 97;
        var mainFont = 'bold 48px monospace';
        var smallFont = 'bold 18px monospace';
        var colors = ['green', 'red', 'blue', 'purple', 'orange', 'blueviolet', 'magenta'];
        var gridRect = { x: 46, y: 47, w: 308, h: 517 };
        var previewRect = { x: 387, y: 47, w: 200, h: 200 };
        var titleRect = { x: 100, y: 95, w: 252, h: 100 };
        var clickRect = { x: 50, y: 375, w: 252, h: 40 };
        var outerRect = { x: 5, y: 5, w: 630, h: 630 };
        var squareBorder = 'white';
        var titlebgColor = 'white';
        var textColor = 'black';
        var bgColor = '#DDEEFF';
        var gridColor = '#BECFEA';
        var gridBorderColor = '#7788AA';
        var largeStroke = 5;
        var smallStroke = 2;

        var fallingShapeRow;
        var fallingShapeCol;

        var keyDown = false;
        var fastDown = false;

        var grid = [];
        var scoreboard = new Scoreboard();

        addEventListener('keydown', function (event) {
            if (!keyDown) {
                keyDown = true;

                if (scoreboard.isGameOver())
                    return;

                switch (event.key) {

                    case 'w':
                    case 'ArrowUp':
                        if (canRotate(fallingShape))
                            rotate(fallingShape);
                        break;

                    case 'a':
                    case 'ArrowLeft':
                        if (canMove(fallingShape, left))
                            move(left);
                        break;

                    case 'd':
                    case 'ArrowRight':
                        if (canMove(fallingShape, right))
                            move(right);
                        break;

                    case 's':
                    case 'ArrowDown':
                        if (!fastDown) {
                            fastDown = true;
                            while (canMove(fallingShape, down)) {
                                move(down);
                                draw();
                            }
                            shapeHasLanded();
                        }
                }
                draw();
            }
        });

        addEventListener('keyup', function () {
            if(event.code==='Space'){
                startNewGame();
            }
        });

        addEventListener('keyup', function () {
            keyDown = false;
            fastDown = false;
        });

        function canRotate(s) {
            if (s === Shapes.Square)
                return false;

            var pos = new Array(4);
            for (var i = 0; i < pos.length; i++) {
                pos[i] = s.pos[i].slice();
            }

            pos.forEach(function (row) {
                var tmp = row[0];
                row[0] = row[1];
                row[1] = -tmp;
            });

            return pos.every(function (p) {
                var newCol = fallingShapeCol + p[0];
                var newRow = fallingShapeRow + p[1];
                return grid[newRow][newCol] === EMPTY;
            });
        }

        function rotate(s) {
            if (s === Shapes.Square)
                return;

            s.pos.forEach(function (row) {
                var tmp = row[0];
                row[0] = row[1];
                row[1] = -tmp;
            });
        }

        function move(dir) {
            fallingShapeRow += dir.y;
            fallingShapeCol += dir.x;
        }

        function canMove(s, dir) {
            return s.pos.every(function (p) {
                var newCol = fallingShapeCol + dir.x + p[0];
                var newRow = fallingShapeRow + dir.y + p[1];
                return grid[newRow][newCol] === EMPTY;
            });
        }

        function shapeHasLanded() {
            addShape(fallingShape);
            if (fallingShapeRow < 2) {
                scoreboard.setGameOver();
                scoreboard.setTopscore();
            } else {
                scoreboard.addLines(removeLines());
            }
            selectShape();
        }

        function shapeHasLanded() {
            addShape(fallingShape);
            if (fallingShapeRow < 2) {
                scoreboard.setGameOver();
                scoreboard.setTopscore();
            } else {
                scoreboard.addLines(removeLines());
            }
            selectShape();
        }

        function removeLines() {
            var count = 0;
            for (var r = 0; r < nRows - 1; r++) {
                for (var c = 1; c < nCols - 1; c++) {
                    if (grid[r][c] === EMPTY)
                        break;
                    if (c === nCols - 2) {
                        count++;
                        removeLine(r);
                    }
                }
            }
            return count;
        }

        function removeLine(line) {
            for (var c = 0; c < nCols; c++)
                grid[line][c] = EMPTY;

            for (var c = 0; c < nCols; c++) {
                for (var r = line; r > 0; r--)
                    grid[r][c] = grid[r - 1][c];
            }
        }