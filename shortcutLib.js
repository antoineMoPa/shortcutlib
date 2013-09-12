var shortcutLib;

if(typeof q !== 'undefined'){
	shortcutLib.previousQ = q;
}

(function(q){
	
	q = {};
	
	//Utilities
	
	q.callbacks = {};
	
	q.callbacks.callbacks = [];
	
	q.callbacks.add = function(refName,callback){
		
		if(typeof q.callbacks.callbacks[refName] === 'undefined')
			q.callbacks.callbacks[refName] = []
			
		q.callbacks.callbacks[refName].push(callback)
	}
	
	q.callbacks.execute = function(refName){
		
		if(typeof q.callbacks.callbacks[refName] === 'undefined')
			return
			
		for(var i = 0; i < q.callbacks.callbacks[refName].length; i++){
			q.callbacks.callbacks[refName][i]()
		}
	}
	
	q.ready = function(callback){
		if(typeof callback === 'undefined'){
			q.callbacks.execute("domready")
		}
		else{
			q.callbacks.add("domready",callback)
		}
	}
	
	q.inArray = function(a,obj){
		return (a.indexOf(obj) === -1)?false:true;
	}
	
	shortcutLib = q;
	
})(shortcutLib);

q = shortcutLib;
