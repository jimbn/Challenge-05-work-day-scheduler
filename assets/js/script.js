// display current day, month date
$("#currentDay").text(moment().format("dddd, MMMM Do"));

$(".saveBtn").on("click", function() {
    let description = $(this).siblings(".description").val();
    let time = $(this).parent().attr("id");

    // set objects in local storage
    localStorage.setItem(time, description);
})

// load saved data from LocalStorage
$("#09 .description").val(localStorage.getItem("09"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));

function trackTime () {
    let currentTime = moment().hour();

    $(".time-block").each(function() {
        let blockTime = parseInt($(this).attr("id"));

        if (blockTime < currentTime) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        } 
         else if (blockTime === currentTime) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        } 
         else {
            $(this).removeClass("past");
            $(this).addClass("future");
            $(this).removeClass("present");
        }
    })
}

trackTime();
