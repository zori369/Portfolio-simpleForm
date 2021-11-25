$(document).ready(function() {
	fetch("https://www.palmsbet.com/static/games_bg.json").then(r=>r.json()).then(json=>{
		let List = new Array();
    	$.each(json.game_list, function(index, element) {
    		if(element.vendor_code=="CTRGSECASINO"){
    			List.push(element);
    		}
		}); 
    	if(List.length==0){
    		$(".message").removeClass("hidden");
    		$(".grid__game").addClass("hidden");
    	}
    	else{
    		$.each(List, function(index, element){
    			var Image=element.img_url;
    			var Name=element.name;
    			if(Image.slice(0,6)=="https:"){
    				return Image;
    			}
    			else{
    				Image="https:"+Image;
    			}
    			$(".grid__game:first-child").clone(true).appendTo(".games__grid");
    			$(".games__grid").children().last(".grid__game").css("background-image", "url(" + Image + ")");
    			$(".games__grid").children().last(".grid__game").children().children(".game__name").append(Name);
    		});
    		$(".grid__game:first-child").addClass("hidden");
    		$(".grid__game:nth-child(2)").addClass("first");
    	}
    })
	function toogleButtons(){
	    $(".grid__game").hover(
	    	function(e){
	    		$(this).children(".game__buttons").removeClass("hidden");
	    		$(this).children().addClass("has-flag");
	    	},
	    	function(e){
	    		$(this).children(".game__buttons").addClass("hidden");
	    		$(this).children().removeClass("has-flag");
	    	}
	    )
	}

	toogleButtons();
});