
var test_Snake_Collision_HeadPosBeforeTailPos_ReturnsFalse_WhenNoCollision = function() {
    var xPositionsSnake = [ 75, 76, 77, 78, 79, 80 ];
    var yPositionsSnake = [ 75, 75, 75, 75, 75, 75 ];

    var headPosition = 5;

    var radius = 3;
    if (true === isSnakeCollisionWithItSelf(xPositionsSnake, yPositionsSnake, headPosition, xPositionsSnake.length, radius)) {
        console.log("Error: test_Snake_Collision_HeadPosBeforeTailPos_ReturnsFalse_WhenNoCollision() returns true when no collision");
        return;
    }

    var radius = 5;
    if (true === isSnakeCollisionWithItSelf(xPositionsSnake, yPositionsSnake, headPosition, xPositionsSnake.length, radius)) {
        console.log("Error: test_Snake_Collision_HeadPosBeforeTailPos_ReturnsFalse_WhenNoCollision() returns true when no collision");
        return;
    }

    console.log("Passed:  test_Snake_Collision_HeadPosBeforeTailPos_ReturnsFalse_WhenNoCollision()");
};

var test_Snake_Collision_HeadPosBeforeTailPos_ReturnsTrue_WhenCollision = function() {

    // setup a snake collision case
    // a pre-condition is that the head must be more than 3*radius positions from the head to register a collision
    var radius = 1;
    var xPositionsSnake = [ 75, 76, 77, 78, 79, 76 ]; 
    var yPositionsSnake = [ 75, 75, 75, 75, 75, 75 ];
    var headPosition = 5;

    if (false === isSnakeCollisionWithItSelf(xPositionsSnake, yPositionsSnake, headPosition, xPositionsSnake.length, radius)) {
        console.log("Error: test_Snake_Collision_HeadPosBeforeTailPos_ReturnsTrue_WhenCollision() returns false when collision");
        return;
    }

    console.log("Passed:  test_Snake_Collision_HeadPosBeforeTailPos_ReturnsTrue_WhenCollision()");
};
