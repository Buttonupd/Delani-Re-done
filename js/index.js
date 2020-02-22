function  math(num1,num2){
    var added = num1 + num2;
   
    console.log(added);
     return added;
}
added(10,20)

$(document).ready(function() {
    $("p").click(function() {
      $(".img").toggle()});
    });

$(document).ready(function(){
    $(".floated").click(function(){
        $("img").toggle()
        $("p").click()
        alert("hel")
    })
})