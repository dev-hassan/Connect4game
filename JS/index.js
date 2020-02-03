window.addEventListener("load", function () {



    //get buttons on form 
    var btn_mode = document.getElementsByClassName("button")[0];
    var btn_names1 = document.getElementsByClassName("button")[1];
    var btn_names2 = document.getElementsByClassName("button")[2];
    var btn_complex = document.getElementsByClassName("button")[3];
    var btn_data = document.getElementsByClassName("button")[5];

    //get list items on form
    var first_list_mode = document.getElementsByTagName("li")[0];
    var second_list_names = document.getElementsByTagName("li")[1];
    var third_list_level = document.getElementsByTagName("li")[2];

    // get div section on form
    var section_mode = document.getElementsByClassName("section")[0];
    var section_names1 = document.getElementsByClassName("section")[1];
    var section_names2 = document.getElementsByClassName("section")[2];
    var section_complex = document.getElementsByClassName("section")[3];
    var section_level = document.getElementsByClassName("section")[4];
    var section_data = document.getElementsByClassName("section")[5];

    // get textboxs on form
    var name1 = document.getElementsByName("name")[0];
    var name2 = document.getElementsByName("name2")[0];
    var name3 = document.getElementsByName("name3")[0];


    //define player obejects
    player1 = new _player();
    player2 = new _player();




    var gmMode = 1;                     //for game mode
    var gmComplex = 1;                  //for game complex
    var gmLevel = 1;                    //for game level


    //radio buttons on form
    var radioMode = document.getElementById("r1");
    var radiocomx = document.getElementById("r3");
    var radiolevel = document.getElementById("r5");

    // action on out from textbox 1 -- validation
    name1.onblur = function () {

        if (name1.value == "") {
            document.getElementById("n1").style.visibility = "visible";
            return false;
        }
        else {
            document.getElementById("n1").style.visibility = "hidden";
            return true;
        }
    };//end onblur

    //action on out from textbox 2 -- validation
    name2.onblur = function () {

        if (name2.value == "") {
            document.getElementById("n2").style.visibility = "visible";
            return false;
        }
        else {
            document.getElementById("n2").style.visibility = "hidden";
            return true;
        }

    };//end onblur

    //action on out from textbox 3 -- validation
    name3.onblur = function () {

        if (name3.value == "") {
            document.getElementById("n3").style.visibility = "visible";
            return false;
        }
        else {
            document.getElementById("n3").style.visibility = "hidden";
            return true;
        }

    };//end onblur

    //action on choose game mode 
    btn_mode.onclick = function () {

        section_mode.className = "section";
        first_list_mode.className = "";
        second_list_names.className = "is-active";
        if (radioMode.checked) {
            section_names1.className = "section is-active";
        }
        else {
            section_names2.className = "section is-active";
        }
    };//end onclick

    //action on submit names
    btn_names1.onclick = function () {
        var text1 = document.getElementsByName("name")[0].value;
        var text2 = document.getElementsByName("name2")[0].value;


        if (name1.onblur() && name2.onblur()) {
            if (retrive(text1) != null || retrive(text2) != null) {
                if (retrive(text1) != null) {
                    player1 = retrive(text1);
                    section_data.children[0].innerText = "Wellcome Back : " + player1.getname();
                    section_data.children[1].innerText = "Last Score  : " + player1.getscore();
                    section_data.children[2].innerText = "last login : " + player1.getdate();
                }
                if (retrive(text2) != null) {
                    player2 = retrive(text2);
                    section_data.children[4].innerText = "------------------------------------";
                    section_data.children[4].innerText = "Wellcome Back : " + player2.getname();
                    section_data.children[5].innerText = "Last Score  : " + player2.getscore();
                    section_data.children[6].innerText = "last login : " + player2.getdate();
                }
                section_names1.className = "section";
                section_data.className = "section is-active";
            }
            else {
                section_names1.className = "section";
                second_list_names.className = "";
                third_list_level.className = "is-active";
                section_level.className = "section is-active";
            }
        }
    };//end on click


    //action on submit name
    btn_names2.onclick = function () {
        var text3 = document.getElementsByName("name3")[0].value;
        if (name3.onblur()) {
            if (retrive(text3) != null) {
                player1 = retrive(text3);
                section_data.children[0].innerText = "Wellcome Back : " + player1.getname();
                section_data.children[1].innerText = "Last Score  : " + player1.getscore();
                section_data.children[2].innerText = "last login : " + player1.getdate();
                section_names2.className = "section";
                section_data.className = "section is-active";
            }
            else {
                section_names2.className = "section";
                section_complex.className = "section is-active";
            }
        }
    };//end on click

    //funcion for data div
    btn_data.onclick = function () {

        section_data.className = "section";
        if (radioMode.checked) {
            second_list_names.className = "";
            third_list_level.className = "is-active";
            section_level.className = "section is-active";
        }
        else {
            section_complex.className = "section is-active";
        }
    };// end on click

    //action on submit game complex for computer
    btn_complex.onclick = function () {

        section_complex.className = "section";
        second_list_names.className = "";
        third_list_level.className = "is-active";
        section_level.className = "section is-active";
    };//end on click

    //get button start
    btn_submit = document.getElementsByName("start")[0];
    // action on start game
    btn_submit.onclick = function (e) {

        //get text boxes values
        var name1 = document.getElementsByName("name")[0].value;
        var name2 = document.getElementsByName("name2")[0].value;
        var name3 = document.getElementsByName("name3")[0].value;

        // get current date
        dateObj = new Date();
        // CurrentDate = dateObj.getDay() + "-" + dateObj.getMonth() + "-" + dateObj.getYear() + " " + dateObj.getHours() + ":" + dateObj.getMinutes();

        if (radiocomx.checked) {
            gmComplex = 1;
        }
        else {
            gmComplex = 2;
        }
        if (radiolevel.checked) {
            gmLevel = 1;;
        }
        else {
            gmLevel = 2;
        }
        if (radioMode.checked) {
            gmMode = 1;
            player1 = new _player(name1, player1.getscore(), dateObj.toLocaleDateString() + " " + dateObj.toLocaleTimeString());
            player2 = new _player(name2, player2.getscore(), dateObj.toLocaleDateString() + " " + dateObj.toLocaleTimeString());
            store(player1);
            store(player2);
        }
        else {
            gmMode = 2;
            player1 = new _player(name3, player1.getscore(), dateObj.toLocaleDateString() + " " + dateObj.toLocaleTimeString());
            player2 = new _player("Computer", 0, dateObj.toLocaleDateString() + " " + dateObj.toLocaleTimeString());
            store(player1);
            store(player2);
        }

        localStorage.setItem("player1Score", 0);
        localStorage.setItem("player2Score", 0);
        localStorage.setItem("mode", gmMode);
        localStorage.setItem("level", gmLevel);
        localStorage.setItem("complex", gmComplex);
        if (gmMode == 1) {
            localStorage.setItem("player1", name1);
            localStorage.setItem("player2", name2);
        }
        else {
            localStorage.setItem("player1", name3);
            localStorage.setItem("player2", "Computer");
        }

        gm = open("ConnectFour.html", "_self");

    };//end on click

});
