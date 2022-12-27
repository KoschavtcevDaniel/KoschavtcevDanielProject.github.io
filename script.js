
var b = document.getElementByClass("but");

$(function(){
    $(".form_a").submit(function(e){
        e.preventDefault();
        var href = $(this).attr("action");
        $.ajax({
            type: "POST",
            dataType: "json",
            url: href,
            data: $(this).serialize(),
            success: function(response){
                if(response.status == "success"){
                    b.innerHTML = "We received your submission, thank you!";
                }else{
                    b.innerHTML = "An error occured: " + response.message;
                }
            },
            error: function(){
                b.innerHTML = "Connection error. Please, try again later!";
                }
        });
    });
})


var el = document.getElementById("navContent");

function toggle() {
  el.style.display = (el.style.display == 'grid') ? 'none' : 'grid';
}
