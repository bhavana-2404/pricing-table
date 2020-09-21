




$(".switch").on("click",changeText);

function changeText(){
    var isChecked=$("input")[0].checked;
    if(isChecked===true)
    {
        $(".a").html("$19.99");
        $(".b").html("$49.99");
        $(".c").html("$39.99");
    }
    else if(isChecked===false)
    {
        $(".a").html("$199.99");
        $(".b").html("$499.99");
        $(".c").html("$399.99");
    }
}
