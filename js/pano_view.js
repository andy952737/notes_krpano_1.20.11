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
	    var hs_name = 'hs' + ((Date.now() + Math.random()) | 0); 
	    var hs_name2 = 'hs2' + ((Date.now() + Math.random()) | 0); 
	   	var url = '/image/icon_hotspot.png'; 
	    var h = -0.900;
	    var v = 56.800;    
	    var h2 = -15;  
	    var v2 = +12;     
		
		/* hotpsot迴圈從這帶入 */     
		add_hotspot(hs_name, url, h, v);  
		add_hotspot(hs_name2, url, h2, v2);    

		// var arrays = ["eyehouse", "edhouse", "EyehouseCoffee"];
		// arrays.forEach(function(item){ 
		// 	  //alert(item); 
		// });  

		/* add for hotspot */ 
		function add_hotspot(hs_name, url, h, v){            
			//krpano.call('add_hotspot(' + hs_name + ',');
			krpano.call('add_hotspot(' + hs_name + ',' + url + ',' + h + ',' +  v + ')');   
		    krpano.call("set(hotspot[" + hs_name + "].atv, " + h + ");");
  			krpano.call("set(hotspot[" + hs_name + "].ath, " + v + ");");   
  			krpano.call("set(hotspot[" + hs_name + "].url, " + url +");");
  			//krpano.call("set(hotspot[" + hs_name + "].onclick, js(alert(‘點擊熱點'));"); 
  			//krpano.call("set(hotspot[" + hs_name + "].onclick, click_hotspot(" + hs_name + ")"); 
  			krpano.set("hotspot[" + hs_name + "].onclick", "click_move_hotspot(" + hs_name + ")");

  			// krpano.call('click_move_hotspot(' + hs_name + ',' + url + ',' + h + ',' +  v + ')');  
		    // krpano.set('hotspot[' + hs_name + '].url', url); 
		    // krpano.set('hotspot[' + hs_name + '].ath', h);
		    // krpano.set('hotspot[' + hs_name + '].atv', v);
		    // krpano.set("hotspot[" + hs_name + "].onclick", "click_hotspot(" + hs_name + ")");
		    
		}  

		function test(hs) {
		  console.log(hs);    
		  //alert("test");
		};  

		//krpano.call('add_hotspot(' + name + ',' + src + ',' + krpano.get('mouseath') + ',' + krpano.get('mouseatv') +',' + scene +')');

	   
}