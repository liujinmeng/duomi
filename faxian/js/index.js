$(function(){
		 function artStyle(){
			   $(".artLeft").each(function(index, element) {
                 if($(this).height()<$(this).siblings(".artRight").height()){
					 var maxheight=$(this).siblings(".artRight").height();
					 var height=$(this).height();
			  		 $(this).css("margin-top",(maxheight-height)/2);
			  	  }
              });
		  }
		 /*  window.onload = window.onresize = function() {
			  $(".pheader li:eq(0)").click();
			 artStyle();
		  };*/
		  $(".pheader li").on("click",function(){
			  var n=$(this).index();
			  var left=($(window).width()-106)*(2*n+1)/6+53;
			  $(".pheader p").animate({left:left});
		  });
	});