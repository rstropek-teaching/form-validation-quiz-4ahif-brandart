checkSubmitButton();

function checkSubmitButton(){
    if($('#firstName').val() === '' || $('#lastName').val() === '' || $('#email').val() === '' || $('#mediaChannelSelect').val() === 'other'){
        $('#submitButton').hide();
    }else{
        $('#submitButton').show();
    }
}
    

$("input").keyup(function(){
    if($('#firstName').val() === ''){
        $('#firstNameMandatory').show();
    }else{
        $('#firstNameMandatory').hide();
    }

    if($('#lastName').val() == ''){
        $('#lastNameMandatory').show();
    }else{
        $('#lastNameMandatory').hide();
    }

    if($('#email').val() == ''){
        $('#emailMandatory').show();
    }else{
        $('#emailMandatory').hide();
    }

    checkSubmitButton();
});

$('#mediaChannelSelect').change(function() {
    if($('#mediaChannelSelect').val() === 'other'){
        $('#otherMediaChannel').show();
    }else{
        $('#otherMediaChannel').hide();
    }
    checkSubmitButton();
});