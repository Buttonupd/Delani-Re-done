$(document).ready(function(){
    $("#dev-image").click(function(){
        $("#dev-image").slideDown('1500').hide('1000');
        $("#dev-image").show('1500');
    });
    $("#DEVELOPMENT").click(function(){
        $("#DEVELOPMENT").slideup('1500');
        $("#dev-image").slideDown('1500');
    })
});

$(document).ready(function(){
    $("#fashion-img").click(function(){
        $("#fashion-img").slideDown('1500').hide('1000');
        $("#DESIGN").show('1500');
    })
    $("#DESIGN").click(function(){
        $("#DESIGN").slideUp('1500');
        
    })
})
