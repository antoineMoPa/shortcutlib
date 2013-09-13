(function(q){
	/*[dom]*/
	
	rootElement = document;
	
	q.d = function(selector,initing){
		if( typeof initing !== 'undefined' && initing == true){
			
			this.element = null;
			this.elements = [];
			
			if(typeof selector == 'string')
				this.elements = rootElement.querySelectorAll(selector)
			else{
				this.elements[0] = selector
				this.length = 1
			}
				
		
			return this;
		}
		else{		
			return q.d.init(selector)
		}		
	}
	
	//Selectors
	
	q.d.fn = q.d.prototype;
	
	q.d.init = function (selector){
		return new q.d(selector,true); 
	}
	
	//Manipulate
	
	q.d.fn.before = function(content){
		var $ = this;
		
		if(typeof(content) == "string"){
			content = q.d.utils.HTMLStringToFragment(content);
		}
		$.each(function(){
			rootElement.body.insertBefore(content, $.element);
		});
		
		return $;
	}

	q.d.fn.after = function(content){
		var $ = this;
		
		if(typeof(content) == "string"){
			content = q.d.utils.html(content);
		}
		$.each(function(){
			$.element.
				parentNode.
					insertBefore( 	
									content,	
									$.element.nextSibling 
								);
		});
		
		return $;
	}

	q.d.fn.append = function(content){
		var $ = this
		
		if(typeof content === 'undefined')
			return q
			
		if(typeof content === "string"){
			content = q.d.utils.html(content);
		}
		
		$.each(function(){
			$.element.appendChild(content);
		})
		
		return $;
	}

	q.d.fn.prepend = function(content){
		var $ = this;
		
		if(typeof(content) == "string"){
			content = q.d.utils.html(content);
		}
		
		$.each(function(){
			if($.element.firstChild){
				$.element.insertBefore(content,$.element.firstChild)
			}
			else{
				$.element.appendChild(content)
			}
		});
		
		return $;
	}

	q.d.fn.remove = function(){
		var q = this;
		
		q.each(function(){
			q.element.parentNode.removeChild(q.element)
		})
		
		return q
	}
	
	q.d.fn.clear = function (){
		var q = this
		
		q.each(function(){
			this.element.innerHTML = ''
		})
		
		return q
	}
	
	q.d.fn.text = function(newText){
		var $ = this;
		
		if(typeof newText === 'undefined'){
			var text = "";
			$.each(function(){
				text += $.element.textContent;
			})
			
			return text
		}
		else{
			$.each(function(){
				$.element.textContent = newText;
			})
		}
		
		return $;
	}
	
	q.d.fn.html = function(newHtml){
		var $ = this;
		
		if(typeof newHtml === 'undefined'){
			var html = "";
			$.each(function(){
				html += $.element.innerHTML;
			})
			
			return html
		}
		else{
			$.each(function(){
				$.element.innerHTML = newHtml;
				$.element.innerHTML = newHtml;
			})
		}
		
		return $;
	}
	
	//classes
	
	q.d.fn.addClass = function(className){
		var $ = this;
		
		$.each(function(){
			$.element.className.replace(className,"");
			$.element.className += " "+className;
		});
		return $;
	}
	
	q.d.fn.removeClass = function(className){
		var $ = this;
		
		$.each(function(){
			$.element.className = $.element.className.replace(className,"");
		});
		return $;
	}
	
	q.d.fn.toggleClass = function(className){
		var $ = this;
		
		$.each(function(){
			if($.element.className.indexOf(className) != -1){
				$.element.className.replace(className,"");
			}
			else{
				$.element.className.replace(className,"");
				$.element.className += " "+className;
			}
		});
		return $;
	}
	
	//Events
	
	q.d.fn.on = function(eventType,callback){
		var $ = this;
		
		$.each(function(){
			$.element.addEventListener(eventType,function(event){
				
				callback.call($.element,event)
			});
		});
		
		return $;
	}
	
	q.d.fn.one = function(eventType,callback){
		var $ = this;
		
		$.each(function(){
			$.element.addEventListener(eventType,function(event){
				$.element.removeEventListener(eventType,arguments.callee)
				callback.call($.element,event)
			});
		});
		
		return $;
	}

	//Styling
	
	q.d.fn.css = function(rules){
		var $ = this;

		for(rule in rules){
			$.each(function(){
				$.element.style[rule] = rules[rule];
			})			
		}

		return $;
	}
	
	q.d.fn.hide = function(){
		this.each(function(){
			this.attr("data-display",this.element.style.display)
			this.element.style.display = "none";
		})
		return this
	}
	
	q.d.fn.show = function(){
		this.each(function(){
			this.element.style.display = this.attr("data-display")
		})
		return this
	}
	
	q.d.fn.height = function(newHeight){
		if(typeof newHeight === 'undefined'){
			var clientHeight = this.elements[0].clientHeight
			
			return	(clientHeight == 0 ) ?
					clientHeight :
					this.elements[0].innerHeight
		}
		this.each(function(){
			if(newHeight == parseInt(newHeight)){
				newHeight += "px"
			}
			this.element.style.height = newHeight
		})
	}
	
	q.d.fn.width = function(newWidth){
		if(typeof newWidth === 'undefined'){
			var clientWidth = this.elements[0].clientWidth
			
			return	(clientWidth == 0 ) ?
					clientWidth :
					this.elements[0].innerWidth
		}
		this.each(function(){
			if(newWidth == parseInt(newWidth)){
				newWidth += "px"
			}
			this.element.style.Width = newWidth
		})
	}
	
	//Forms
	
	q.d.fn.val = function(value){
		if(typeof value === 'undefined'){
			return this.elements[0].value
		}
		this.each(function(){
			this.element.value = value
		})
		
		return this
	}
	
	//Data
	
	q.d.fn.attr = function(attribute,value){
		if (typeof value === 'undefined'){
			return this.elements[0].getAttribute(attribute);
		}
		else{
			this.elements[0].setAttribute(attribute,value);
			return this;
		}
	}
	
	//Access dom
	
	q.d.fn.item = function(index){
		return this.elements[index];
	}
	
	q.d.fn.parent = function(){
		var el = this.elements[0];
		this.elements = [];
		this.elements[0] = this.el.parentNode;
		return this;
	}
	
	q.d.fn.each = function(callback){
		var $ = this;
		for(var i = 0; i < $.elements.length; i++ ){
			$.element = $.elements[i];
			if(callback.call($) == -1){
				return $
			}
		}
		return $
	}
	
	q.d.fn.first = function(){
		return q.d(this.elements[0])
	}
	
	
	q.d.utils = {}
	
	q.d.utils.html = function (htmlString){	
		var frag = rootElement.createDocumentFragment(),
			temp = rootElement.createElement('div');
		
		temp.innerHTML = htmlString;
		
		while (temp.firstChild) {
			frag.appendChild(temp.firstChild);
		}
		
		return frag;
	}
	
	q.d.utils.nodeList = function(domElement){
		var fragment = rootElement.createDocumentFragment();
		fragment.appendChild(domElement);
		return fragment.childNodes;
	}
	
	q.d.utils.addStyle = function (style){
		if(typeof(style) == "string"){
			var css = rootElement.createElement("style");
			css.type = "text/css";
			css.innerHTML = style;
			q.d("head").append(css);
		}
	}
	
	q.extend = function (object,defaults){
		
		if(typeof object === 'undefined'){
			return defaults;
		}
		
		for(var setting in defaults){
			if(typeof object[setting] === 'undefined'){
				object[setting] = defaults[setting]
			}
		}
		return object
	}
	
	
	/*[/dom]*/
})(shortcutLib);
