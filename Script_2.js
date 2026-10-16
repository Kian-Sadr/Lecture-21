//Collecting elements for easier reading later
var output = document.getElementById("output");
var link = document.getElementById("link");

function print(msg){
    output.innerHTML += '<p>';
    output.innerHTML += msg;
    output.innerHTML += '</p>';
}

async function readContent(){
    let url = link.value;
    output.textContent = "";
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error("HTTP error: "+response.status);
        }
        const data = await response.json();
        print("Data: "+JSON.stringify(data));
    } catch(error){
        print("Could not read data: " + error.message);
    }
}
