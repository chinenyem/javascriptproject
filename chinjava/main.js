$(document).ready(function() {

  $(" nav a").click(function(event) {

    event.preventDefault();
    var pageToNavigate = "." + $(this).attr("rel");
    console.log(pageToNavigate);

    //* this is removing the container images

    $(".container").children().removeClass("currentPage");
    //* this is adding the each individual child back
    $(pageToNavigate).addClass("currentPage");

  });

$(".photo a").click(function(event){

	event.preventDefault();
   $(this).closest("li").siblings().toggleClass("hide")
  	$(this).toggleClass('checked')
  });


});

