player1name = localStorage.getItem("player1name");
player2name = localStorage.getItem("player2name");
player1score = 0;
player2score = 0;
document.getElementById("player1_name").innerHTML = player1name + " : ";
document.getElementById("player2_name").innerHTML = player2name + " : ";
document.getElementById("player1_score").innerHTML = player1score;
document.getElementById("player2_score").innerHTML = player2score;
document.getElementById("player_question").innerHTML = "Question Turn - " + player1name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2name;

function send()
{
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    multiply = parseInt(number1)*parseInt(number2);
    console.log(multiply);
    question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
    inputbox = "<br> Answer : <input type = 'number' id = 'inputcheckbox'>";
    buttoncheck = "<br><br> <button class = 'btn btn-primary' onclick='check()'>Check</button>";
    row = question_number + inputbox + buttoncheck;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number1").value = "";
}
