$(document).ready(function(){
    $("#dev-image").click(function(){
        $("#dev-image").slideDown('1500').hide('1000');
        $("#DEVELOPMENT").show('1500');
    });
    $("#DEVELOPMENT").click(function(){
        $("#DEVELOPMENT").slideUp('1500');
        $("#dev-image").slideDown('1500');
    })
});

$(document).ready(function(){
    $("#Fashion-img").click(function(){
        $("#Fashion-img").slideDown('1500').hide('1000');
        $("#DESIGN").show('1500');
    })
    $("#DESIGN").click(function(){
        $("#DESIGN").slideUp('1500');
        $("#Fashion-img").slideDown('1500');

    });
});

$(document).ready(function(){
    $("#prod-img").click(function(){
        $("#prod-img").slideDown('1500').hide('1000');
        $("#products").show('1500');
    });
    $("#products").click(function(){
        $("#products").slideUp('1500');
        $("#prod-img").slideDown('1500');
    })
})
