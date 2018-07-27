var routes = [];
var i;

function init(){
	initResources();
	loadDatabase();
	var size = routes.length;
	console.log("The size is: ", size);
	for(var i = 0; i<size; i++){
		createElement(routes[i].empresa, routes[i].camion, routes[i].ruta, routes[i].dia, routes[i].hora, routes[i].device_id);
	}

}

function loadDatabase(){
	routes = rutas;
}

function createElement(company, bus, route, day, hour, device_id){
	//If the day exists
	if($("#"+company+"-"+bus+"-"+route+"-"+day+"").length == 1){		
		var new_element = "<div id="+company+"-"+bus+"-"+route+"-"+day+"-"+hour+"> <div> "+hour+"<input type=\"checkbox\" class=\"check-box\" id="+device_id+"> </div> </div>";
		$("#"+company+"-"+bus+"-"+route+"-"+hour+"-"+day+"").append(new_element);
	//If the route exists	
	}else if($("#"+company+"-"+bus+"-"+route+"").length == 1){
		var new_element = "<button class=\"accordion day\">"+day+"<i class=\"material-icons\"> calendar_today </i></button> <div class=\"panel hour\" id="+company+"-"+bus+"-"+route+"-"+hour+"-"+day+"> <div id="+company+"-"+bus+"-"+route+"-"+day+"-"+hour+"> <div> "+hour+"<input type=\"checkbox\" class=\"check-box\" id="+device_id+"> </div> </div> </div>";
		$("#"+company+"-"+bus+"-"+route+"").append(new_element);
	//If the bus exists
	}else if($("#"+company+"-"+bus+"").length == 1){
		var new_element = "<button class=\"accordion route\">"+route+"<i class=\"material-icons\"> terrain </i></button> <div class=\"panel\" id="+company+"-"+bus+"-"+route+"> <button class=\"accordion day\">"+day+"<i class=\"material-icons\"> calendar_today </i></button> <div class=\"panel hour\" id="+company+"-"+bus+"-"+route+"-"+hour+"-"+day+"> <div id="+company+"-"+bus+"-"+route+"-"+day+"-"+hour+"> <div> "+hour+"<input type=\"checkbox\" class=\"check-box\" id="+device_id+"> </div> </div> </div> </div>";
		$("#"+company+"-"+bus+"").append(new_element);
		//If the company exists
	}else if($("#"+company+"").length == 1){
		var new_element = "<button class=\"accordion bus\">"+bus+"<i class=\"material-icons\"> directions_bus </i></button> <div class=\"panel\" id="+company+"-"+bus+"> <button class=\"accordion route\">"+route+"<i class=\"material-icons\"> terrain </i></button> <div class=\"panel\" id="+company+"-"+bus+"-"+route+"> <button class=\"accordion day\">"+day+"<i class=\"material-icons\"> calendar_today </i></button> <div class=\"panel hour\" id="+company+"-"+bus+"-"+route+"-"+hour+"-"+day+"> <div id="+company+"-"+bus+"-"+route+"-"+day+"-"+hour+"> <div> "+hour+"<input type=\"checkbox\" class=\"check-box\" id="+device_id+"> </div> </div> </div> </div> </div>";
		$("#"+company+"").append(new_element);
	}else{
		console.log("Company")
		var new_element = "<button class=\"accordion comp\">"+company+" <i class=\"material-icons\">location_city</i> </button> <div class=\"panel\" id="+company+"> <button class=\"accordion bus\">"+bus+"<i class=\"material-icons\"> directions_bus </i></button> <div class=\"panel\" id="+company+"-"+bus+"> <button class=\"accordion route\">"+route+"<i class=\"material-icons\"> terrain </i></button> <div class=\"panel\" id="+company+"-"+bus+"-"+route+"> <button class=\"accordion day\">"+day+"<i class=\"material-icons\"> calendar_today </i></button> <div class=\"panel hour\" id="+company+"-"+bus+"-"+route+"-"+hour+"-"+day+"> <div id="+company+"-"+bus+"-"+route+"-"+day+"-"+hour+"> <div> "+hour+"<input type=\"checkbox\" class=\"check-box\" id="+device_id+"> </div> </div> </div> </div> </div> </div>";
		$('.main').append(new_element);
	}
}


function initResources(){

	$(".main").on("click", ".accordion",  function(){
		this.classList.toggle("active");
		//console.log(this);
		var panel = this.nextElementSibling;
		if (panel.style.display === "block") {
			panel.style.display = "none";
		} else {
			panel.style.display = "block";
		}
	});

	$(".main").on("change", ".check-box",  function(){
		var devices_ids = [];
		var cb = document.getElementsByClassName("check-box");
		for(i = 0; i<cb.length; i++){
			if(cb[i].checked){
				console.log("The device #"+cb[i].id+" is checked");
				devices_ids.push(cb[i].id);
			}
		}
		console.log("The devices id array is: ", devices_ids);
	});

}


window.onload = init();


