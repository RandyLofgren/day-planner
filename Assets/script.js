$(".saveBtn").on("click", function () {
    var clickedHour = $(this).attr("data-hour")
    var text = $("#hour" + clickedHour).val()
    localStorage.setItem("time" + clickedHour, text)
})
var now = moment()
for (let i = 9; i < 18; i++) {
    var currentHour = parseInt(now.format("H"))
    console.log(currentHour)
    if (i < currentHour) {
        $("#hour" + i).addClass("past")
    } else if (i === currentHour) {
        $("#hour" + i).addClass("present")
    } else {
        $("#hour" + i).addClass("future")
    }
    var hourText = localStorage.getItem("time" + i)
    if (hourText !== null) {
        $("#hour" + i).val(hourText)
    }
}
$("#currentDay").text(now.format("dddd, MMMM Do YYYY"))