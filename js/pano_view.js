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