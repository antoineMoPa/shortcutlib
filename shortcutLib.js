/*
    GPL javascript library for dom manipulation and more
    Copyright (C) 2013  Antoine Morin-Paulhus

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.

*/

var shortcutLib;

if(typeof q !== 'undefined'){
	shortcutLib.previousQ = q;
}

q = shortcutLib;


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
