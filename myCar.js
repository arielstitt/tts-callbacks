function myDisplayer(some){
    document.getElementById("demo").innerHTML = some;
}

function getFile(myCallback) {
    //new instance of the http object
    let req = new XMLHttpRequest();

    req.open("GET", "mycar.html");
    req.onload = function(){
        if(req.status == 200) {
            myCallback(this.responseText);
        } else {
            myCallback("Error: " + req.status);
        }
    }
    req.send();
}

getFile(myDisplayer);