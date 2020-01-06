var fs = require('fs');
var _dir = __dirname + "/files";

// const button = document.querySelector('.js-button');

var hList = [];
readDir();
// fs.readdir(_dir, function(err, files){
//     files.forEach(function(file){
//         if(fs.statSync(_dir + "/" + file).isFile()){
//             // _type = "file     :";
//         }else{
//             // _type = "directory:";
//         }
//         hList += "<li name='clickable'>" + file + "</li>" + "\n";
//     });
//     document.getElementById("viewer").innerHTML = hList;

//     var target = document.getElementsByName('clickable');
//     target.forEach(function(list){

//     });
// });

function attache(hList){
    document.getElementById("viewer").innerHTML = hList;
    getDir();
}

function getDir(){
    var target = document.getElementsByName('clickable');
    target.addEventListener('click', sample, false);
}

function sample(){
    console.log("ji");
}

function readDir(){
    fs.readdir(_dir, function(err, files){
        files.forEach(function(file){
            if(fs.statSync(_dir + "/" + file).isFile()){
                // _type = "file     :";
            }else{
                // _type = "directory:";
            }
            console.log(file);
        });
    });
}

// button.addEventListener('click', function (clickEvent) {
//     console.log("hogeijiojf");
// });