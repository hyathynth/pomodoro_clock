function subsTime (ele){
    var current_time = ele.text();
    if (current_time > 1) {
        ele.text(parseInt(current_time) - 1);
    }
}

function addTime (ele) {
    var current_time = ele.text();
    ele.text(parseInt(current_time) + 1);
}

function formatTime (hr, min, sec) {
    if (hr < 10) {
        hr = ('0' + hr).slice(-2);
    }
    if (min < 10) {
        min = ('0' + min).slice(-2);
    }
    if (sec < 10) {
        sec = ('0' + sec).slice(-2);
    }
    return hr + ':' + min + ':' + sec;
}

function displayTime (session, ele){
    var temp_time = parseInt(session.text()) * 60;
    var temp_hr = Math.floor(temp_time / 3600);
    var temp_min = Math.floor((temp_time / 60 - temp_hr * 60));
    var temp_sec = Math.floor(temp_time - temp_hr*3600 - temp_min*60);
    ele.text(formatTime(temp_hr, temp_min, temp_sec));
}

function updateTime (ele) {
    var str_time = $('#clock').text().split(':');
    temp_hr = str_time[0];
    temp_min = str_time[1];
    temp_sec = str_time[2];
    if (temp_sec > 0) {
        temp_sec--;
    }
    else if (temp_min > 0) {
        temp_sec = 59;
        temp_min--;
    }
    else if (temp_hr > 0) {
        temp_min = 59;
        temp_hr--;
    }
    ele.text(formatTime(temp_hr, temp_min, temp_sec));
}

    
var interval = null;


$(document).ready(function () {
    
    
    displayTime($('#session'), $('#clock'));
    
    
    $('#s_minus').on('click', function(){
        subsTime($('#session'));
        displayTime($('#session'), $('#clock'));
    })
      
    
    $('#s_add').on('click', function(){
        addTime($('#session')); 
        displayTime($('#session'), $('#clock'));
    })
    
    
     $('#b_minus').on('click', function(){
        subsTime($('#break'));
        
    })
    
     $('#b_add').on('click', function(){
        addTime($('#break'));
        
    })
    
    $('#play').on('click', function() {
        interval = setInterval(function () {
            updateTime($('#clock'));
        }, 1000);
        
    })

    $('#pause').on('click', function(){
        clearInterval(interval); 
    })
    
    $('#stop').on('click', function(){
        clearInterval(interval); 
        displayTime($('#session'), $('#clock'));
    })
    
    
})
    
