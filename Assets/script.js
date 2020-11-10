// var saveButton = $("#ready")
// var clickedHour= $("img:focus").attr('data-hour');

$(".saveBtn").on("click",function(){
    var clickedHour = $(this).attr("data-hour")
    var text = $("#hour"+clickedHour).val()
   localStorage.setItem("time"+clickedHour, text)
})

// alert(clickedHour)
    
// })

for (let i = 9; i < 18; i++) {
    var hourText = localStorage.getItem("time"+i)
    if(hourText !== null){
        $("#hour"+i).val(hourText)
    }
    
}

// $("#hour"+clickedHour).val()

