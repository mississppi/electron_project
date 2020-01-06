var DataStore = require('nedb');
var db = new DataStore({
    filename: 'data/database.db',
    autoload: true
});

getListsData();

//読み込み時の処理
//新規登録のクリックイベント
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("task_form").onsubmit = () => {
        const taskTitle = document.getElementById("task_title");

        createListData(taskTitle.value);

        if (taskTitle.value === "") {
            return false;
        }

        taskTitle.value = "";

        getListsData();
        return false;
    };

});

//キーイベントの登録
document.addEventListener("keydown", function(e){
    var keyCode = false;

    if(event) event = e;
    if(event) {
        if(event.keyCode){
            keyCode = event.keyCode;
        } else if (event.which){
            keyCode = event.which;
        }
    }
    //escapeキー
    if(keyCode === 27){
        deleteArea();
    }

    //
    if(keyCode === 38) { // ↑
        focus_prev();
        return false;
    }
    if(keyCode === 40) { // ↓
        focus_next();
        return false;
    }
});

function focus_prev(){
    console.log("hoge");
}

function focus_next(){
    console.log("hoge");
}

//タスク登録
function createListData(title) {
    var rowDate = new Date();
    var date = 
    rowDate.getFullYear() +
     '/' + 
     ('0' + (rowDate.getMonth() + 1)).slice(-2) + 
     '/' + 
     ('0' + rowDate.getDate()).slice(-2) + 
     ' ' + 
     ('0' + rowDate.getHours()).slice(-2) +
     ':' +
     ('0' + rowDate.getMinutes()).slice(-2) +
     ':' +
     ('0' + rowDate.getSeconds()).slice(-2)
     ;
    var doc = {
        title: title,
        content: "",
        date: date
    }
    db.insert(doc, function(err) {
        
    });
}

//タスク一覧表示
function getListsData(){
    db.find({}, function(err, docs){
        var view = document.getElementById("lists");
        view.textContent = null;
        docs.forEach(function(li){
            var task_li = document.createElement('li');
            task_li.id = li._id;
            task_li.classList.add('adctive');
            task_li.onclick = () => {
                getDetailData(li._id, li.title, li.content);
            }

            var link = document.createElement("a");
            link.href = "#";
            link.textContent = li.title;
            task_li.appendChild(link);
            view.appendChild(task_li);
            task_li = "";
        }); 
       
    });

}

//タスク詳細表示
//詳細画面では、タスク一覧要素を削除する
function getDetailData(taskId, taskTitle, taskContent){

    //タスク一覧の要素を削除する
    var deleteArea = document.getElementById("lists");
    deleteArea.textContent = null;

    //新規フォームごと削除する　
    var area = document.getElementById("task_form");
    area.textContent = null;

    //テキストエリアに詳細を詰める
    //idも _id を追加
    var parentForm = document.getElementById("task_detail");
    var textArea = document.createElement('textarea');
    textArea.setAttribute("id", taskId);
    textArea.setAttribute("class", "taskName");
    textArea.setAttribute("rows", 10);
    textArea.setAttribute("value", ' ');
    textArea.value = taskContent;
    parentForm.appendChild(textArea);
}

//タスク更新処理
//タスク詳細画面から、タスク一覧へ遷移
//タスク詳細要素を削除
function deleteArea(){
    var area = document.getElementById('task_detail');
    var child = area.getElementsByClassName('taskName');
    updateTask(child[0].id, child[0].value);

    // フォーム削除
    var parentForm = document.getElementById("task_detail");
    parentForm.textContent = null;

    getListsData();
}

//タスク更新
function updateTask(id, content){
    var query = { _id: id };

    var update = {
        $set: {
            _id: id,
            content: content,
        },
    };

    var options = {};

    db.update(query, update, options, (error, docs) => {
    });
}