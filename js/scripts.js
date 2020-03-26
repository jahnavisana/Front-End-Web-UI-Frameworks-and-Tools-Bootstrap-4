$(document).ready(function(){
    $("#mycarousel").carousel( { interval:2000 } );
    $("#carouselButton").click(function(){
            if ($("#carouselButton").children("span").hasClass('fa-pause')) {
                $("#mycarousel").carousel('pause');
                $("#carouselButton").children("span").removeClass('fa-pause');
                $("#carouselButton").children("span").addClass('fa-play');
            }
            else if ($("#carouselButton").children("span").hasClass('fa-play')){
                $("#mycarousel").carousel('cycle');
                $("#carouselButton").children("span").removeClass('fa-play');
                $("#carouselButton").children("span").addClass('fa-pause');                    
            }
        });


  $("#login").click(function(){
    $("#loginModal").modal();
  });
  $("#closeBut").click(function(){
    $("#loginModal").modal("hide");
  });
  $("#closeBu").click(function(){
    $("#loginModal").modal("hide");
  });
      $("#reserve").click(function(){
        $("#reserveModal").modal();
      });
      $("#closeres").click(function(){
        $("#reserveModal").modal("hide");
      });
      $("#closere").click(function(){
        $("#reserveModal").modal("hide");
      });
    });
    