

// function Check first cell non-zero and all cells match and level

function Check_Route() {
    //get fisrt argument and put it assignment on Seqn 
    var Seqn = (arguments[1] == 2) || (arguments[1] == 1);
    for (m = 2; m < arguments.length; m++) {
        Seqn = Seqn && (arguments[1] == arguments[m]);
    }
    if (arguments[0] == 1)
        return ((arguments[1] != 0) && (arguments[1] == 2) && Seqn);
    else
        return ((arguments[1] != 0) && Seqn && ((arguments[1] == 2 || (arguments[1] == 1))));
}//end check_route

function ComputerPlayer(arr, level, Complex_lavel) {
    //check for level 2
    if (level == 2) {

        //for 4 balls
        // Check up  4 balls 
        for (i = 5; i > 3; i--) {
            for (j = 0; j < 7; j++) {
                if ((arr[i - 4][j] == 0) && Check_Route(Complex_lavel, arr[i][j], arr[i - 1][j], arr[i - 2][j], arr[i - 3][j])) {
                    return j;
                }
            }
        }
        // Check right 4 balls
        for (i = 0; i < 6; i++) {
            for (j = 0; j < 3; j++) {
                if ((arr[i][j + 4] == 0) && Check_Route(Complex_lavel, arr[i][j], arr[i][j + 1], arr[i][j + 2], arr[i][j + 3])) {
                    return j + 4;
                }
            }
        }
        //check left 4 balls
        for (i = 0; i < 6; i++) {
            for (j = 6; j > 3; j--) {
                if ((arr[i][j - 4] == 0) && Check_Route(Complex_lavel, arr[i][j], arr[i][j - 1], arr[i][j - 2], arr[i][j - 3])) {
                    return j - 4;
                }
            }
        }

        // Check down-right 4 balls
        for (i = 0; i < 2; i++) {
            for (j = 0; j < 3; j++) {
                if ((arr[i + 4][j + 4] == 0) && Check_Route(Complex_lavel, arr[i][j], arr[i + 1][j + 1], arr[i + 2][j + 2], arr[i + 3][j + 3])) {
                    return j + 4;
                }
            }
        }
        // Check down-left 4 balls
        for (i = 0; i < 2; i++) {
            for (j = 6; j > 3; j--) {
                if ((arr[i + 4][j - 4] == 0) && Check_Route(Complex_lavel, arr[i][j], arr[i + 1][j - 1], arr[i + 2][j - 2], arr[i + 3][j - 3])) {
                    return j - 4;
                }
            }
        }
        // Check right - up 4 balls
        for (i = 5; i > 3; i--) {
            for (j = 6; j > 3; j--) {
                if ((arr[i - 4][j - 4] == 0) && Check_Route(Complex_lavel, arr[i][j], arr[i - 1][j - 1], arr[i - 2][j - 2], arr[i - 3][j - 3])) {
                    return j - 4;
                }
            }
        }
        // Check left - up 4 balls
        for (i = 5; i > 4; i--) {
            for (j = 0; j < 3; j++) {
                if ((arr[i - 4][j + 4] == 0) && Check_Route(Complex_lavel, arr[i][j], arr[i - 1][j + 1], arr[i - 2][j + 2], arr[i - 3][j + 3])) {
                    return j + 4;
                }
            }
        }
    }
    //For level one and two
    //for 3 balls 
    // Check up 3 balls 
    for (i = 5; i > 2; i--) {
        for (j = 0; j < 7; j++) {
            if ((arr[i - 3][j] == 0) && Check_Route(Complex_lavel, arr[i][j], arr[i - 1][j], arr[i - 2][j])) {
                return j;
            }
        }
    }
    // Check right 3 balls
    for (i = 0; i < 6; i++) {
        for (j = 0; j < 4; j++) {
            if ((arr[i][j + 3] == 0) && Check_Route(Complex_lavel, arr[i][j], arr[i][j + 1], arr[i][j + 2])) {
                return j + 3;
            }
        }
    }
    //check left 3 balls
    for (i = 0; i < 6; i++) {
        for (j = 6; j > 2; j--) {
            if ((arr[i][j - 3] == 0) && Check_Route(Complex_lavel, arr[i][j], arr[i][j - 1], arr[i][j - 2])) {
                return j - 3;
            }
        }
    }

    //for 2 balls
    // Check up 
    for (i = 5; i > 1; i--) {
        for (j = 0; j < 7; j++) {
            if ((arr[i - 2][j] == 0) && Check_Route(Complex_lavel, arr[i][j], arr[i - 1][j])) {
                return j;
            }
        }
    }
    // Check right
    for (i = 0; i < 6; i++) {
        for (j = 0; j < 5; j++) {
            if ((arr[i][j + 2] == 0) && Check_Route(Complex_lavel, arr[i][j], arr[i][j + 1])) {
                return j + 2;
            }
        }
    }
    //check left
    for (i = 0; i < 6; i++) {
        for (j = 6; j > 1; j--) {
            if ((arr[i][j - 2] == 0) && Check_Route(Complex_lavel, arr[i][j], arr[i][j - 1])) {
                return j - 2;
            }
        }
    }
    //for 1 balls
    // Check down 
    for (i = 5; i > 0; i--) {
        for (j = 0; j < 7; j++) {
            if ((arr[i - 1][j] == 0) && Check_Route(1, arr[i][j])) {
                return j;
            }
        }
    }
    // Check right
    for (i = 0; i < 6; i++) {
        for (j = 0; j < 6; j++) {
            if ((arr[i][j + 1] == 0) && Check_Route(1, arr[i][j])) {
                return j + 1;
            }
        }
    }
    //check left
    for (i = 0; i < 6; i++) {
        for (j = 6; j > 0; j--) {
            if ((arr[i][j - 1] == 0) && Check_Route(1, arr[i][j])) {
                return j - 1;
            }
        }
    }
    //first colm empty
    for (i = 0; i < 7; i++) {
        var rnd = Math.floor(Math.random() * 7);
        if (arr[5][rnd] == 0) {
            //console.log("for 1 balls zero");
            return rnd;
        }
    }
    // random if no one done 
    return Math.floor(Math.random() * 7);


   
}//end of function