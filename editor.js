window.addEventListener('DOMContentLoaded', onLoad);

function onLoad() {
    // 入力関連領域
    inputArea = document.getElementById('input_area');
    // 入力領域
    inputTxt = document.getElementById('input_txt');

    editor = ace.edit('input_txt');
    editor.getSession().setMode('ace/mode/javascript');
    editor.setTheme('ace/theme/twilight');
}

// editor = ace.edit("input_txt");
// editor.getSession().setMode("ace/mode/javascript");
// editor.setTheme("ace/theme/twilight");