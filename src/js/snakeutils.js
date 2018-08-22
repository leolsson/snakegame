/**
 * Returns true if the two circles overlaps
 */
var isOverlappingCircles = function(circle1x, circle1y, radius1, circle2x, circle2y, radius2) {

    var isOverlapping = false;

    // Use Pythagorean theorem to calculate if the two circles are overlapping
    var legX = (circle1x - circle2x);
    var legY = (circle1y - circle2y);

    var hypotenuse = Math.sqrt(legX * legX + legY * legY);

    if ( (hypotenuse + 1)  <= (radius1 + radius2)) {  // 1 some margin for overlapp detection
        isOverlapping = true;
    }

    return isOverlapping;
};

/**
 * Checks if the snake collides with itself.
 */
var isSnakeCollisionWithItSelf = function(xPositionsSnake, yPositionsSnake, headPosition, snakeLength, radiusSnakePosition) {

    // snakeLength not needed? always same as the length of snake's
    // xPositionsSnake or yPositionsSnake

    var headCollsionMargin = 0; // some margin to no collide with itself when to
                                // close to head

    if (xPositionsSnake.length <= radiusSnakePosition) {
        return false;
    }

    for (i = 0; i < xPositionsSnake.length; i++) {

        // skip the checks for collision with the snake positions within 3*radius of the snake head position
        // since they will collide with the snake implemented here.
        if (i <= headPosition && ((i + 3*radiusSnakePosition + headCollsionMargin) > headPosition)) {
            continue;
        } else if (i > headPosition && ((i + 3*radiusSnakePosition + headCollsionMargin) > (xPositionsSnake.length + headPosition))) {
            continue;
        }

        if (isOverlappingCircles(xPositionsSnake[headPosition], yPositionsSnake[headPosition], radiusSnakePosition, xPositionsSnake[i], yPositionsSnake[i],
                radiusSnakePosition)) {

            return true;
        }
    }

    return false;
};


var isSnakeCollisionWithPoint = function(xPositionsSnake, yPositionsSnake, headPosition, radiusSnakePosition, xPoint, yPoint, radiusPoint) {
    return isOverlappingCircles(xPositionsSnake[headPosition], yPositionsSnake[headPosition], radiusSnakePosition, xPoint, yPoint, radiusPoint);
}


var isSnakeCollisionGameBoard = function(xPositionsSnake, yPositionsSnake, headPosition, radiusSnakePosition, xBoardLeft, xBoardRight, yBoardUp, yBoardDown ) {
    
    var isCollision = false;
    
    if (
            xPositionsSnake[headPosition] <= xBoardLeft  ||
            xPositionsSnake[headPosition] >= xBoardRight ||
            yPositionsSnake[headPosition] <= yBoardUp    ||
            yPositionsSnake[headPosition] >= yBoardDown
    ) { 
        isCollision = true;
    }
        
    
    return isCollision;
}
