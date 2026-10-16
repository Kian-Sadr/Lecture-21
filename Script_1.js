//Collecting elements for easier reading later
var output = document.getElementById("output");
var link = document.getElementById("link");

function print(msg){
    output.innerHTML += '<p>';
    output.innerHTML += msg;
    output.innerHTML += '</p>';
}

function getPromise(){
    let url = link.value;
    output.textContent = "";
    //Incomplete
}