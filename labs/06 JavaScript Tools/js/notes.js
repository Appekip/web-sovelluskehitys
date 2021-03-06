"use strict";
var notes = new Array();

function addItem() {
	var textbox = document.getElementById('item');

	if(notes.indexOf(textbox) !== -1){
		alert("Value exists!")
	}
	else {
		var itemText = textbox.value;
		textbox.value = '';
		textbox.focus();
		var newItem = {title: itemText, quantity: 1};
		notes.push(newItem);
		displayList();
	}
}

function displayList() {
	var table = document.getElementById('list');
	table.innerHTML = '';
	for (var i = 0; i<notes.length; i++) {
		var node = undefined;
		var note = notes[i];
		var node = document.createElement('tr');
		var html = '<td>'+note.title+'</td><td>'+note.quantity+'</td><td><a href="#" onClick="deleteIndex('+i+')">delete</td>';
	    node.innerHTML = html;
		table.appendChild(node);
	}
}

function deleteIndex(i) {
	notes.splice(i, 1);
	displayList();
}

var button = document.getElementById('add');
button.onclick = addItem;
