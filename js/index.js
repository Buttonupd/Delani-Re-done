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
    });
});

$(document).ready(function(){
    $("#one").mouseover(function(){
        $("#switch_board").show();
    }).mouseout(function(){
        $("#switch_board").hide();
    });
});

$(document).ready(function(){
    $("#two").mouseover(function(){
        $("#switch_board2").show();
    }).mouseout(function(){
        $("#switch_board2").hide();
    });
});

$(document).ready(function(){
    $("#three").mouseover(function(){
        $("#switch_board3").show();
    }).mouseout(function(){
        $("#switch_board3").hide();
    });
});

$(document).ready(function(){
    $("#four").mouseover(function(){
        $("#switch_board4").show();
    }).mouseout(function(){
        $("#switch_board4").hide();
    });
});

$(document).ready(function(){
    $("#five").mouseover(function(){
        $("#switch_board5").show();
    }).mouseout(function(){
        $("#switch_board5").hide();
    });
});

$(document).ready(function(){
    $("#six").mouseover(function(){
        $("#switch_board6").show();
    }).mouseout(function(){
        $("#switch_board6").hide();
    });
});

$(document).ready(function(){
    $("#seven").mouseover(function(){
        $("#switch_board7").show();
    }).mouseout(function(){
        $("#switch_board7").hide();
    });
});

$(document).ready(function(){
    $("#eight").mouseover(function(){
        $("#switch_board8").show();
    }).mouseout(function(){
        $("#switch_board8").hide();
    });
});

$(document).ready(function(){
    $("#form").submit(function(event){
        event.preventDefault();
        var name = $("input#merge1").val();
        var email = $("input#merge0").val();
        var message = $("textarea#comment").val();
        if ($ ("input#merge1").val() && ("input#merge0").val()) {
            alert(name + ", Your message has been received. Thank you for reaching out to us");
        }
        else {
            alert("Please enter your name and email");
        }

    })
})