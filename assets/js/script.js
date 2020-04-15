$('#delete-button').on("click",function(){
    $('#checkbox input:checked').parent().remove();
});