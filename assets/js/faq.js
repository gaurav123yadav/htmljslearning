$("#first_name").click(function () {
    first_check()
});
function first_check() {
    var first_val = $("#first_name").val();

    if (first_val.length == '') {
        $("#firstcheck").show();
        $("#firstcheck").html("this is a required field ");
        $("#firstcheck").focus();
        $("#firstcheck").css("color", "red");
        first_Error = false;
        return false;
    } else {
        $("#firstcheck").hide();
        return true;
    }

}
$("#last_name").click(function () {
    last_check()
});
function last_check() {
    var last_val = $("#last_name").val();

    if (last_val.length == '') {
        $("#lastcheck").show();
        $("#lastcheck").html("this is a required field ");
        $("#lastcheck").focus();
        $("#lastcheck").css("color", "red");
        last_Error = false;
        return false;
    } else {
        $("#lastcheck").hide();
        return true;

    }
}
$("#email_id").click(function () {
    email_check()
});
function email_check() {
    var email_val = $("#email_id").val();

    var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
    if (email_val.length =='') {
        $("#emailcheck").show();
        $("#emailcheck").html("this is a required field ");
        $("#emailcheck").focus();
        $("#emailcheck").css("color", "red");
        email_Error = false;
        return false;
    } else {
        if (!pattern.test(email_val)) {
            $("#emailcheck").html("email is not valid ");
            return false
        } else {
            $("#emailcheck").hide();
            return true;
        }
    }
}

$("#contact_nmbr").click(function () {
    contact_check()
});
function contact_check() {
    var contact_val = $("#contact_nmbr").val();
    var patrn = /^(\+?1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/

    if (contact_val.length == '') {
        $("#numbercheck").show();
        $("#numbercheck").html("this is a required field ");
        $("#numbercheck").focus();
        $("#numbercheck").css("color", "red");
        contact_Error = false;
        return false;
    } else {
        if(!patrn.test(contact_val)){
            $("#numbercheck").html("Please specify a valid phone number"); 
            return false
        }else{

        $("#numbercheck").hide();
        return true;
    }
  }
}
$("#Company_name").click(function () {
    company_check()
});
function company_check() {
    var company_val = $("#Company_name").val();

    if (company_val.length == '') {
        $("#companycheck").show();
        $("#companycheck").html("this is a required field ");
        $("#companycheck").focus();
        $("#companycheck").css("color", "red");
        company_Error = false;
        return false;
    } else {
        $("#companycheck").hide();
        return true;
    }    
}
$("#msg").click(function () {
    msg_check()
});
function msg_check() {
    var msg_val = $("#msg").val();

    if (msg_val.length == '') {
        $("#msgcheck").show();
        $("#msgcheck").html("Please correct errors before submitting this form");
        $("#msgcheck").focus();
        $("#msgcheck").css("color", "red");
        msg_Error = false;
        return false;
    } else {
        $("#msgcheck").hide();
        return true;
    }    
}

$("#btton").onclick(function () {

    $('input[type="submit"]').attr('disabled','disabled');
    $('input[type="text"]').change(function(){
        if($(this).val !=''){
            $('input[type="submit"]').removeAttr('disabled');
        }
    });

});
function checkAllValidations() {
    first_check()
    last_check()
    email_check()
    contact_check()
    company_check()
    msg_check()
    if (first_check() && last_check() && email_check() && contact_check() && company_check()&& msg_check()) {
        alert('Form submitted Successfully');
    }
    return first_check() && last_check() && email_check() && contact_check() && company_check() && msg_check();

}
