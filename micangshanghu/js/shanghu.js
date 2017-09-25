// JavaScript Document
$(function(){
	/* setInterval(function(){
        $.fn.fullpage.moveSectionDown();
    }, 3000);*/
	$('#dowebok').fullpage({
		sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
		afterLoad: function(anchorLink, index){
			if(index == 1){
				count();
			}
			if(index == 2){
				$('.section2 .top3').find('p').delay(100).animate({
					left: '0'
				}, 1000, 'easeOutExpo');
				$('.section2').find('.center2').delay(500).animate({
					top: '50%'
				}, 2000, 'easeOutExpo');
			}
			if(index == 3 || index == 4){
				$('.section'+index).find('.three1').delay(0).animate({
					left: '-60px',
					bottom:0,
					margin:0
				}, 1500, 'easeOutExpo');
				$('.section'+index).find('.three2').delay(0).animate({
					left:'100%',
					bottom:0,
					margin:'0 0 0 0'
				}, 1500, 'easeOutExpo');
				$('.section'+index).find('.three3').delay(0).animate({
					left: '50%',
					bottom:'100%',
					margin:'0 0 13px -30px'
				}, 1500, 'easeOutExpo');
				$('.section'+index).find('.firstpart').delay(500).animate({
					left:'0'
				}, 1500, 'easeOutExpo');
				$('.section'+index).find('.secondpart').delay(1500).animate({
					left: '0'
				}, 1500, 'easeOutExpo');
				$('.section'+index).find('.threepart').delay(2500).animate({
					left:'0'
				}, 1500, 'easeOutExpo');
				
			}
			if(index == 4){
				$('.next').hide();
			}
		},
		onLeave: function(index, direction){
			if(index == '2'){
				$('.section2 .top3').find('p').delay(0).animate({
					left: '-120%'
				}, 1500, 'easeOutExpo');
				$('.section2').find('.center2').delay(0).animate({
					top: '100%'
				}, 1000, 'easeOutExpo');
			}
			if(index == '3' ||index == '4' ){
				$('.section'+index).find('.three').delay(0).animate({
					left: '50%',
					bottom:'50%',
					margin:'0 0 -30px -30px'
				}, 500, 'easeOutExpo');
				$('.section'+index).find('.firstpart').delay(0).animate({
					left:'-200%'
				}, 500, 'easeOutExpo');
				$('.section'+index).find('.secondpart').delay(0).animate({
					left: '200%'
				}, 500, 'easeOutExpo');
				$('.section'+index).find('.threepart').delay(0).animate({
					left:'-200%'
				}, 500, 'easeOutExpo');
				
			}
			if(index == 4){
				$('.next').show();
			}
			
		}
	});
	count();
	function count(){
		$('.counter').countUp({     delay: 10,     time:500 }); 
	}
});