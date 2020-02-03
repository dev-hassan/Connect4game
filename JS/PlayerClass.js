// JavaScript source code
//variables
var names = new Array();                            // array store names
var scores = new Array();                           // array store scores
var dates = new Array();                            // array store dates

// function for player data
function _player(_name, _score, _date) {
    var name = _name;
    var score = _score;
    var date = _date;
    this.getname = function () {
        return name;
    }
    this.setname = function (_name) {
        name = _name;
    }
    this.getscore = function () {
        return score;
    }
    this.setscore = function (_score) {
        score = _score;
    }

    this.getdate = function () {
        return date;
    }
    this.setdate = function (_date) {
        date = _date;
    }
    this.printplayer = function () {
        console.log(name, score, date);
    }
}
//function to store player data on localstorge
function store(player) {

    var _name = player.getname();
    var index = -1;
    for (var i = 0; i < names.length; i++) {
        if (_name.toUpperCase() == (names[i].toUpperCase())) {
            index = i;
            break;
        }
    }
    if (index != -1) {
        scores[index] = player.getscore();
        dates[index] = player.getdate();
    }
    else {

        names.push(player.getname());
        scores.push(player.getscore());
        dates.push(player.getdate());
    }
    localStorage.setItem('names', names);
    localStorage.setItem('scores', scores);
    localStorage.setItem('dates', dates);
}


//function to retrive player data from localstorge
function retrive(_name) {
    var index = -1;
    if (localStorage.getItem("names") != null) {
        names = localStorage.getItem("names").split(',');
        scores = localStorage.getItem("scores").split(',');
        dates = localStorage.getItem("dates").split(',');
        for (var i = 0; i < names.length; i++) {
            if (_name.toUpperCase() == (names[i].toUpperCase())) {
                index = i;
                break;
            }
        }
    }

    if (index != -1)
        return new _player(names[index], scores[index], dates[index]);
    else
        return null;
}



