// Current Time =====>>>>>>>>>>
function currentTime() {
    var current = new Date();
    document.getElementById("my_date").style.color = "red";
    document.getElementById("my_date").innerHTML = current;
}

// is it timer function=====>>>>>>>>>>>

function mytimer() {
    setInterval(() => {
        var curr = new Date().getTime();
        var final = new Date("Tue dec 31 2022 23:59:59").getTime();
        var remainig = final - curr;
        var day = Math.floor(remainig / (1000 * 60 * 60 * 24));
        var hour = Math.floor(remainig % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        var min = Math.floor(remainig % (1000 * 60 * 60) / (1000 * 60));
        var sec = Math.floor(remainig % (1000 * 60) / (1000));
        var total = day + " Day " + hour + " Hour " + min + " Min " + sec + " Sec";

        document.getElementById("curr_timer").style.color = "red";
        document.getElementById("curr_timer").innerHTML = total;
    }, 1000);
}

// user define countdown function=====>>>>>>>>>>>>>
function stopwatch() {
    setInterval(() => {

        var userDate = document.getElementById("date").value;
        var spl = userDate.split("-");
        userDate = spl[2] + "/" + spl[1] + "/" + spl[0];
        var userTime = document.getElementById("time").value;

        var y = new Date();
        var x = spl[1] + " " + spl[2] + "," + " " + spl[0] + " " + userTime;
        var curr = new Date().getTime();
        console.log("curr" + curr);
        var final = new Date(x).getTime();
        console.log("final" + final)
        var remain = final - curr;
        console.log(remain);

        if (userDate == 0 || userTime.length == 0) {
            pending_time.style.color = "red";
            document.getElementById("pending_time").innerHTML = "Error : Date Time Must be There ";
        }

        else if (spl[2] < y.getDate()) {
            pending_time.style.color = "red";
            document.getElementById("pending_time").innerHTML = "Error : Entered date is alredy passed ";
        }
        else if (remain < 0) {
            pending_time.style.color = "red";
            document.getElementById("pending_time").innerHTML = "Session Expired ";
        }
        else {
            pending_time.style.color = "brown"
            var day = Math.floor(remain / (1000 * 60 * 60 * 24));
            var hour = Math.floor(remain % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            var min = Math.floor(remain % (1000 * 60 * 60) / (1000 * 60));
            var sec = Math.floor(remain % (1000 * 60) / (1000));
            var total = day + " Day " + hour + " Hour " + min + " Min " + sec + " Sec";
            document.getElementById("pending_time").innerHTML = total;
        }
    }, 1000);
}
