let output = document.getElementById("output");
function display(number) {
    output.innerHTML += number
}
function Delete(){
    output.innerHTML = ""
}
function Clear(){
    output.innerHTML = output.innerHTML.slice(0 , -1)
}
function calc(){
    try{
        output.innerHTML = eval(output.innerHTML)
    }
    catch{
        output.innerHTML = "error"
    }
}