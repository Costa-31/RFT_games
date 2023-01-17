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