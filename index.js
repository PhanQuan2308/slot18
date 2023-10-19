document.addEventListener("DOMContentLoaded", function(event){
    var inputSearch = document.getElementById("keyword");
    inputSearch.onkeydown = function(event){
        if(event.keyCode = 13){
            loadVideo(this.value);
        }
    }
    loadVideo("Đen vâu");
});

var model = document.getElementById('myModel');

var span = document.getElementsByClassName('close')[0];

var videoFrame = document.getElementById("video-frame")