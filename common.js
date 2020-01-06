/*
 * ターミナルのサイズをブラウザ画面いっぱいに設定する関数
 */
function setTerminal(){
    // ブラウザのウインドウサイズを取得
    let innerWidth =  window.innerWidth;
    let innerHeight = window.innerHeight;
     
    // textareaのサイズをウインドウにフィットさせる
    terminal.style.innerWidth  = innerWidth + "px";
    terminal.style.innerHeight = innerHeight + "px";
}

window.addEventListener("load", function() {
    terminal = document.getElementById("viewer");
    setTerminal();
    // terminal.value = operater;
    // terminal.focus();
})

document.onkeydown = function(e) {
    var keyCode = false;

    if(e) event = e;

    if(event) {
        if(event.keyCode === 40){
            alert("下が押されたよ");
        }
    }
}