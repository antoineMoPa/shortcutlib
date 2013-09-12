(function(q){
	q.rest = {}
	
	q.rest.data = {}
	
	q.rest.data.remoteUrl = "127.0.0.1"
	
	q.rest.put = function(path,data,url){
		url = url || q.rest.data.remoteUrl
		
	}
	
	q.rest.delete = function(path,data,url){
		url = url || q.rest.data.remoteUrl
		
	}
	
	q.ajax = function(data){
		
		if(typeof data.url === 'undefined')
			return "AJAX: url is undefined";
		if(typeof data.method === 'undefined')
			return "AJAX: method is undefined";
			
		var xhr = new XMLHttpRequest();
		
		xhr.open(data.method,data.url,true)
		
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		
		if(data.beforeSend === 'function')
			data.beforeSend(xhr)
		
		xhr.onreadystatechange = function(){
			if(xhr.readyState == 0){
				if(typeof data.notInitialized === 'function')
					data.notInitialized(xhr)
			}
			if(xhr.readyState == 1){
				if(typeof data.setUp === 'function')
					data.setUp(xhr)
			}
			if(xhr.readyState == 2){
				if(typeof data.sent === 'function')
					data.sent(xhr)
			}
			if(xhr.readyState == 3){
				if(typeof data.inProgress === 'function')
					data.inProgress(xhr)
			}
			if(xhr.readyState == 4){
				console.log(xhr.responseText)
				if(typeof data.complete === 'function')
					data.complete(xhr)
			}
					
		}
		
		xhr.send()
	}
	
})(shortcutLib);
