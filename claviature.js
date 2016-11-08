/*
   Copyright 2016 Sebastian Zimmer

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

CLAVIATURE = (function () {
	'use strict';
	
	
	var g = function(id){
	
		return document.getElementById(id);
	
	};
	
	
	var makeElement = function (element_tag,element_id,element_class,parent_to_append_to,innerHTML){

		var element = document.createElement(element_tag);
		
		if (element_id !== ""){
			element.id = element_id;
		}
		
		if (element_class !== ""){
			element.className = element_class;
		}
		
		if (typeof parent_to_append_to != "undefined"){
			parent_to_append_to.appendChild(element);
		}
		
		if (innerHTML){
		
			element.innerHTML = innerHTML;
		
		}
		
		return element;
	};
	
	
	var makeDiv = function(parent,id,className,innerHTML){
	
		var div = makeElement("div",id,className,parent,innerHTML);
		
		return div;	
	
	};
	

	//PUBLIC
	var my = {};
	
	my.config = {};
	
	my.key_colors = [
		"white",
		"black",
		"white",
		"black",		
		"white",
		"white",
		"black",
		"white",
		"black",
		"white",
		"black",
		"white"
	];
	
	
	my.key_names = [
		"C",
		"C#",
		"D",
		"D#",		
		"E",
		"F",
		"F#",
		"G",
		"G#",
		"A",
		"Bb",
		"B"
	];
	
	
	my.create = function(config){
	
		my.config = {
			//startKey: config.startKey || 0,
			//endKey: config.endKey || 88,
			onMouseDown: config.onMouseDown || function(){ return; },
			onClick: config.onClick || function(){ return; },
			onMouseUp: config.onMouseUp || function(){ return; },
			onMouseLeave: config.onMouseLeave || function(){ return; },
			onActivate: config.onActivate || function(){ return; },
			onDeactivate: config.onDeactivate || function(){ return; },
			containerID: config.containerID || document.body,
			showLabels: config.showLabels || false,
			id: config.id || "keyboard",
			className: config.className || "keyboard",
			customKeyNames: config.customKeyNames || null
		};		
		
		my.renderKeyboard();
	
	};
	
	
	my.renderKeyboard = function(){
	
		var k = 0;
		
		var keyboard = makeDiv(g(my.config.containerID), my.config.id, my.config.className);
		
		var o0 = makeDiv(keyboard, "o0", "octave");
		o0.style.left = octaveLeft + "px";
		
		//create the 3 keys of octave 0
		my.createKey(0, 0, o0);
		my.createKey(1, 14, o0);
		my.createKey(2, 20, o0);
		
		//position
		var octaveLeft = 40;
		
		//key index
		k = 3;
		
		for (var o = 1; o < 8; o++){
			my.createOctave("o" + o, k, keyboard, octaveLeft);
			
			octaveLeft += 140;
			
			k = k + 12;
			
		}
		
		var o8 = makeDiv(keyboard, "o8", "octave");
		o8.style.left = octaveLeft + "px";
		my.createKey(87, 0, o8);
	
	};
	
	
	my.createKey = function(key, left, parent){
		
		if (my.config.customKeyNames){
			var key_text = my.config.customKeyNames[key];
		}
		
		else {
			key_text = my.key_names[(key + 9) % 12]; // + octave;
		}
		
		var key_color = my.key_colors[(key + 9) % 12];
		var octave = Math.floor((key + 9) / 12);

		var button = makeElement("button", "b" + key, "key " + key_color + "key", parent);
		button.addEventListener("mousedown", function() { my.config.onMouseDown(key); my.activateKey(key, key_text); });
		button.addEventListener("mouseup", function() { my.config.onMouseUp(key);  my.deactivateKey(key, key_text); });
		button.addEventListener("mouseout", function() { my.config.onMouseLeave(key);  my.deactivateKey(key, key_text); });
		button.addEventListener("click", function() { my.config.onClick(key); });
		
		button.style.left = left + "px";
		
		if (my.config.showLabels) {
		
			var label = makeElement("span", "", "key_label", button);
			label.innerHTML = key_text;
		
		}
		
		return button;

	}
	
	
	my.activateKey = function(key, note){
	
		g("b" + (key)).classList.add("active");
		
		my.config.onActivate(key, note);
		
	};
	
	
	my.deactivateKey = function(key, note){
		
		if (!g("b" + key)){
			return false;
		}

		g("b" + (key)).classList.remove("active");
		
		my.config.onDeactivate(key, note);
		
	};


	my.createOctave = function(id, start_key, parent, octave_left){

		var left = 0;
		
		var octave = makeDiv(parent, id, "octave");
		
		for (var i = 0; i < 12; i++){
		
			my.createKey(start_key + i, left, octave);
			
			if (my.key_colors[i] == "black"){ //black key width is 12
				left += 6;
			}
			
			else if (i == 4){
				left += 20;
			}
			
			else {
				left += 14;
			}
			
		}
		
		octave.style.left = octave_left + "px";
		
	}


	my.getActiveKeys = function(){
	
		// TO DO
		
		return;
		
	};
	
	
	return my;
	
})();
