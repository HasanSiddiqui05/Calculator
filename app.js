var fnum = "";
var op = "";
var lnum = "";
var screen = document.querySelector(".display");

function display(num) {
    if(op === ""){
        fnum += num;
        screen.innerHTML = fnum;
    } 
    else{
        lnum += num
        screen.innerHTML = lnum
    }
}

function back() {
    if (op === "") {
        if (fnum !== "") {
            fnum = fnum.slice(0, -1);
            screen.innerHTML = fnum;
        }
    } else {
        if (lnum !== "") {
            lnum = lnum.slice(0, -1);
            screen.innerHTML = lnum;
        }
    }
}

function clean() {
    fnum = ""; 
    op = "";   
    lnum = "";     
    screen.innerHTML = ""; 
}

function operations(ope){
    if (fnum != ""){
        op = ope;
        screen.innerHTML = "";
        update()
    } 
}

function result(){
    fnum = parseFloat(fnum)
    lnum = parseFloat(lnum)
    let res
    switch(op){
        case '+':
            res = fnum + lnum
            break;
        case '-':
            res = fnum - lnum
            break;
        case '*':
            res = fnum * lnum
            break;
        case '/':
            res = fnum / lnum
            break;
    }
    screen.innerHTML = res; 
    fnum = res.toString()
    lnum = ""
    op = ""
}
