function krpanoReady(get_krpano) {  

		var test_data = document.querySelector(".example");
		console.log(test_data.getAttribute('data-scenename'));

		json_demo = {
			id: 1,
			friendly_id: "scene1",
			vr_url: "vr.jpg"
		}
		json_true = JSON.stringify(json_demo);
		//console.log(JSON.stringify(json_demo));
		console.log(JSON.parse(json_true));
		console.log(JSON.parse(json_true).id);
		console.log(JSON.parse(json_true).friendly_id);
		console.log(JSON.parse(json_true).vr_url);

		// var json_text = JSON.stringify(test_data.getAttribute('data-scenes'));
		// console.log(JSON.parse(json_text));	 

		//var scenes = $(".data").data("scenename");

		var krpano = get_krpano;    
 
		// var fov = Number( krpano.get("view.fov") );
		// fov += 10.0;
		// krpano.set("view.fov", fov);   
		
		//var hotspot_count = krpano.get('hotspot.count');
	    //krpano.set("autorotate.enabled", true);
	    //krpano.call('xml_action();');   
	    //krpano.call('addhot2spot();');    
 
	    /* add hotspot var name */
	    var hs_name = 'hs0001' // + ((Date.now() + Math.random()) | 0); 
	    var hs_name2 = 'hs0002'  //+ ((Date.now() + Math.random()) | 0); 
	   	var url = '/image/icon_hotspot.png'; 
	    var h = -0.900;
	    var v = 56.800;    
	    var h2 = -15;  
	    var v2 = +12;     
	    var scene_title = "scene1"; 
    	var scene_page1 = "scene1";
    	var scene_page2 = "scene2";
    	var scene_page3 = "scene3";					
		
		/* hotpsot迴圈從這帶入 */      
		add_hotspot(hs_name, url, h, v, scene_page2);  
		add_hotspot(hs_name2, url, h2, v2, scene_page1);    

		// function test(hs) {
		//   console.log(hs);    
		// };   

		$(".click_img_a").click(function(index){
		    var hs_name = 'hs0002'  //+ ((Date.now() + Math.random()) | 0); 
		   	var url = '/image/icon_hotspot.png'; 
		    var h = -0.900;
		    var v = 56.800;    
			var krpano = document.getElementById("krpanoSWFObject");

			var scene_title = "scene1";
			var scene_page = "scene2";
			
			// ex. 
			// function krpanoLoadScene(sceneName) {
	  		//    document.getElementById("krpanoSWFObject").call("loadscene('" + sceneName + "')");
			// }	 
			//krpano.call("to0");  
			krpano.call('to0(' + scene_title + ')');   
			add_hotspot(hs_name, url, h, v, scene_page);  
		}); 

		$(".click_img_b").click(function(index){
		    var hs_name2 = 'hs0001'  //+ ((Date.now() + Math.random()) | 0); 
		   	var url = '/image/icon_hotspot.png'; 
		    var h2 = -15;  
		    var v2 = +12;  
			var krpano = document.getElementById("krpanoSWFObject");

			var scene_title = "scene2";   
			var scene_page = "scene1";
			
			//krpano.call("to1"); 
			krpano.call('to1(' + scene_title + ')');    
			add_hotspot(hs_name2, url, h2, v2, scene_page);    
		});

		$(".click_img_c").click(function(index){
		    var hs_name2 = 'hs0001'  //+ ((Date.now() + Math.random()) | 0); 
		   	var url = '/image/icon_hotspot.png'; 
		    var h2 = -15;   
		    var v2 = +12;  
			var krpano = document.getElementById("krpanoSWFObject");

			var scene_page3 = "scene3";
			var scene_page = "scene1";
			
			//krpano.call("to1"); 
			krpano.call('to2(' + scene_page3 + ')');  
			add_hotspot(hs_name2, url, h2, v2, scene_page);      
		});

		/* add for hotspot */    
		function add_hotspot(hs_name, url, h, v, scene_page){  
			krpano.call('add_hotspot(' + hs_name + ',' + url + ',' + h + ',' +  v + ',' + scene_page +')');   
		    krpano.call("set(hotspot[" + hs_name + "].atv, " + h + ");");
  			krpano.call("set(hotspot[" + hs_name + "].ath, " + v + ");");   
  			krpano.call("set(hotspot[" + hs_name + "].url, " + url +");");
  			krpano.set("hotspot[" + hs_name + "].onclick", "click_hotspot_move(" + scene_page + ")");
		} 
  
}	