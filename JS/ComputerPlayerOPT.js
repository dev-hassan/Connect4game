function Check_Route() {
    // Check first cell non-zero and all cells match
    var Seqn = (arguments[1] == 2) || (arguments[1] == 1);
    for (m = 2; m < arguments.length; m++) {
        Seqn = Seqn && (arguments[1] == arguments[m]);
    }
    if (arguments[0] == 1)
        return ((arguments[1] != 0) && (arguments[1] == 2) && Seqn);
    else
        return ((arguments[1] != 0) && Seqn && ((arguments[1] == 2 || (arguments[1] == 1))));
}

function ComputerPlayer(arr, level, Complex_lavel) {

    if (level == 2) {

        // Check right - up
        for (i = 5; i > 3; i--) {
            for (j = 6; j > 3; j--) {
                if (Check_Route(Complex_lavel, arr[i][j], arr[i - 1][j - 1], arr[i - 2][j - 2], arr[i - 3][j - 3])) {
                    if (arr[i - 4][j - 4] == 0) {
                        return j - 4;
                    }
                }
            }
        }
        // Check left - up
        for (i = 5; i > 4; i--) {
            for (j = 0; j < 3; j++) {
                if (Check_Route(Complex_lavel, arr[i][j], arr[i - 1][j + 1], arr[i - 2][j + 2], arr[i - 3][j + 3])) {
                    if (arr[i - 4][j + 4] == 0) {
                        return j + 4;
                    }
                }
            }
        }
    }

    // Check up - right - left 
    for (var i = 5; i > 0; i--) {
        for (var j = 0; j < 7; j++) {
            //for 4 ball up
            if (i > 3 && arr[i - 4][j] == 0 && level == 2 && Check_Route(Complex_lavel, arr[i][j], arr[i - 1][j], arr[i - 2][j], arr[i - 3][j])) {

                console.log("for 4 ball up");
                return j;

            }
            //for 4 ball up --
            else if (i > 3 && arr[i - 4][6 - j] == 0 && level == 2 && Check_Route(Complex_lavel, arr[i][6 - j], arr[i - 1][6 - j], arr[i - 2][6 - j], arr[i - 3][6 - j])) {

                console.log("for 4 ball up--");
                return 6 - j;

            }

                //for 4 balls right
            else if (j < 3 && arr[i][j + 4] == 0 && level == 2 && Check_Route(Complex_lavel, arr[i][j], arr[j][j + 1], arr[j][j + 2], arr[j][j + 3])) {

                console.log("for 4 balls right");
                return j + 4;

            }
                //for 4 balls left
            else if (j < 3 && arr[i][2 - j] == 0 && level == 2 && Check_Route(Complex_lavel, arr[i][6 - j], arr[i][5 - j], arr[4 - j], arr[i][3 - j])) {

                console.log("for 4 balls left");
                return 2 - j;

            }
                //for 3 ball up
            else if (i > 2 && arr[i - 3][j] == 0 && Check_Route(Complex_lavel, arr[i][j], arr[i - 1][j], arr[i - 2][j])) {
                console.log("for 3 ball up");
                return j;
            }

                //for 3 ball up --
            else if (i > 2 && arr[i - 3][6 - j] == 0 && Check_Route(Complex_lavel, arr[i][6 - j], arr[i - 1][6 - j], arr[i - 2][6 - j])) {
                console.log("for 3 ball up--");
                return 6 - j;
            }

                //for 3 balls right
            else if (j < 4 && arr[i][j + 3] == 0 && Check_Route(Complex_lavel, arr[i][j], arr[j][j + 1], arr[j][j + 2])) {

                console.log("for 3 balls right");
                return j + 3;

            }
                //    for 3 balls left
            else if (j < 4 && arr[i][3 - j] == 0 && Check_Route(Complex_lavel, arr[i][6 - j], arr[i][5 - j], arr[4 - j])) {

                console.log("for 3 balls left");
                return 3 - j;

            }
                //for 2 ball up
            else if (i > 1 && arr[i - 2][j] == 0 && Check_Route(1, arr[i][j], arr[i - 1][j])) {

                console.log("for 2 ball up");
                return j;

            }
                //for 2 ball up --
            else if (i > 1 && arr[i - 2][6 - j] == 0 && Check_Route(1, arr[i][6 - j], arr[i - 1][6 - j])) {

                console.log("for 2 ball up--");
                return 6 - j;

            }
                //for 2 balls right
            else if (j < 5 && arr[i][j + 2] == 0 && Check_Route(1, arr[i][j], arr[j][j + 1])) {

                console.log("for 2 balls right");
                return j + 2;

            }
                //for 2 balls left
            else if (j < 5 && arr[i][4 - j] == 0 && Check_Route(1, arr[i][6 - j], arr[i][5 - j])) {

                console.log("for 2 balls left");
                return 4 - j;

            }
                //for 1 ball up
            else if (i > 0 && arr[i - 1][j] == 0 && arr[i][j] == 2) {

                console.log("for 1 ball up");
                return j;

            }
                //for 1 ball up --
            else if (i > 0 && arr[i - 1][6 - j] == 0 && arr[i][6 - j] == 2) {

                console.log("for 1 ball up");
                return 6 - j;

            }
                //for 1 balls right
            else if (j < 6 && arr[i][j + 1] == 0 && arr[i][j] == 2) {

                console.log("for 1 balls right");
                return j + 1;

            }
                //    //for 1 balls left
            else if (j < 6 && arr[i][5 - j] == 0 && arr[i][6 - j] == 2) {

                console.log("for 1 balls left");
                return 5 - j;

            }

        }

    }
    //first colm empty
    for (i = 0; i < 7; i++) {
        var rnd = Math.floor(Math.random() * 7);
        if (arr[5][rnd] == 0) {
            console.log("for 1 balls zero");
            return rnd;
        }
    }
    // random
    console.log("for 1 balls random");
    return Math.floor(Math.random() * 7);


    //return -1;
}
