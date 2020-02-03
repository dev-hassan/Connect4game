//function check foe empty index on column and retrive it
function isempty(arr, col)
{
    // for row
    for (i = 5; i >= 0; i--)
    {
        if (arr[i][col] == 0)
            return i;
    }
    return -1;
}//end of function

// array that return result indices
Points_result_arr = [[], [], [], [], []];
// functon return array of result points
function GetPoints() {
    return Points_result_arr;
}//end of function
// function Check first cell non-zero and all cells match
function Check_trace() {
    //first argument
    var Seqn = arguments[0];
    // second argument to end
    for (var i = 1; i < arguments.length; i++) {
        Seqn = Seqn & arguments[i];
    }
    return ((arguments[0] != 0) && Seqn);
}//end of function

// function check winner 
function Check_winner(arr, level) {
    // check if level is 2
    if (level == 1) {
       // Points_result_arr = [[], [], [], [], []];
        // Check down for 4 balls
        for (i = 0; i < 3; i++) {
            for (j = 0; j < 7; j++) {
                if (Check_trace(arr[i][j], arr[i + 1][j], arr[i + 2][j], arr[i + 3][j])) {
                    // Points_result_arr[0].push(arr[i][j], "M");
                    Points_result_arr[0].push(i, j);
                    Points_result_arr[1].push(i + 1, j);
                    Points_result_arr[2].push(i + 2, j);
                    Points_result_arr[3].push(i + 3, j);
                    return arr[i][j];
                }
            }
        }
        // Check right for 4 balls
        for (i = 0; i < 6; i++) {
            for (j = 0; j < 4; j++) {
                if (Check_trace(arr[i][j], arr[i][j + 1], arr[i][j + 2], arr[i][j + 3])) {
                    //   Points_result_arr[0].push(arr[i][j], "W");
                    Points_result_arr[0].push(i, j);
                    Points_result_arr[1].push(i, j + 1);
                    Points_result_arr[2].push(i, j + 2);
                    Points_result_arr[3].push(i, j + 3);
                    return arr[i][j];
                }
            }
        }
    }
    else if (level == 2) {
       // Points_result_arr = [[], [], [], [], [], []];
        // Check down for 5 balls
        for (i = 0; i < 2; i++) {
            for (j = 0; j < 7; j++) {
                if (Check_trace(arr[i][j], arr[i + 1][j], arr[i + 2][j], arr[i + 3][j], arr[i + 4][j])) {
                    // Points_result_arr[0].push(arr[i][j], "M");
                    Points_result_arr[0].push(i, j);
                    Points_result_arr[1].push(i + 1, j);
                    Points_result_arr[2].push(i + 2, j);
                    Points_result_arr[3].push(i + 3, j);
                    Points_result_arr[4].push(i + 4, j);
                    return arr[i][j];
                }
            }
        }
        // Check right for 5 balls
        for (i = 0; i < 6; i++) {
            for (j = 0; j < 3; j++) {
                if (Check_trace(arr[i][j], arr[i][j + 1], arr[i][j + 2], arr[i][j + 3], arr[i][j + 4])) {
                    //Points_result_arr[0].push(arr[i][j], "W");
                    Points_result_arr[0].push(i, j);
                    Points_result_arr[1].push(i, j + 1);
                    Points_result_arr[2].push(i, j + 2);
                    Points_result_arr[3].push(i, j + 3);
                    Points_result_arr[4].push(i, j + 4);
                    return arr[i][j];
                }
            }
        }
        // Check down-right for 5 balls daigonal
        for (i = 0; i < 2; i++) {
            for (j = 0; j < 3; j++) {
                if (Check_trace(arr[i][j], arr[i + 1][j + 1], arr[i + 2][j + 2], arr[i + 3][j + 3], arr[i + 4][j + 4])) {
                    Points_result_arr[0].push(i, j);
                    Points_result_arr[1].push(i + 1, j + 1);
                    Points_result_arr[2].push(i + 2, j + 2);
                    Points_result_arr[3].push(i + 3, j + 3);
                    Points_result_arr[4].push(i + 4, j + 4);
                    return arr[i][j];
                }
            }
        }
        // Check down-left for 5 balls daigonal
        for (i = 0; i < 2; i++) {
            for (j = 6; j > 3; j--) {
                if (Check_trace( arr[i][j], arr[i + 1][j - 1], arr[i + 2][j - 2], arr[i + 3][j - 3], arr[i + 4][j - 4])) {
                    Points_result_arr[0].push(i, j);
                    Points_result_arr[1].push(i + 1, j - 1);
                    Points_result_arr[2].push(i + 2, j - 2);
                    Points_result_arr[3].push(i + 3, j - 3);
                    Points_result_arr[4].push(i + 4, j - 4);
                    return arr[i][j];
                }
            }
        }
    }
    return 0;
}//end of function


