/* krpano for javascript v1.0, 2022/11/8 */
embedpano({   
	swf:"krpano-1.20.11/viewer/krpano.swf",  
	xml:"krpano.xml",  
	target:"pano",
	html5:"auto",  
	mobilescale:1.0,   
	passQueryParameters:true,
	onready() {         				  // 回调函数，类似的还有onerror  
			var krpano = document.getElementById('krpanoSWFObject');
			krpanoReady(krpano); 
	}      
});  
 
function krpanoReady(get_krpano) {  
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

	    //if (scene_title == "scene1") { 
	    	var scene_page2 = "scene2";
	    //} else {  
	    	var scene_page1 = "scene1";					
	   	//}
		
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

		/* add for hotspot */    
		function add_hotspot(hs_name, url, h, v, scene_page){     
			//krpano.call('add_hotspot(' + hs_name + ',');
			krpano.call('add_hotspot(' + hs_name + ',' + url + ',' + h + ',' +  v + ',' + scene_page +')');   
		    krpano.call("set(hotspot[" + hs_name + "].atv, " + h + ");");
  			krpano.call("set(hotspot[" + hs_name + "].ath, " + v + ");");   
  			krpano.call("set(hotspot[" + hs_name + "].url, " + url +");");
  			//krpano.call("set(hotspot[" + hs_name + "].onclick, js(alert(‘點擊熱點'));"); 
  			//krpano.call("set(hotspot[" + hs_name + "].onclick, click_hotspot(" + hs_name + ")"); 
  			krpano.set("hotspot[" + hs_name + "].onclick", "click_hotspot_move(" + scene_page + "," + hs_name + "," + url + "," + h + "," + v + ")");
  			// krpano.set("sphere[" + hs_name + "].onclick", "click_view_change('image/vr.jpg')");
		} 
  
}