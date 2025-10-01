const fs = require('fs');
//-----------------------------------------------------------------------------\
//
// Lara Landis
// CS 479/579
// Kyle Atterson
// 29 September 2025
//
// This is the Javascript code in the Simple Notes app.  The goal is to save 
// the file as a JSON object and allow some interactivity with users in the
// app.
//
//-------------------------------------------------------------------------------



//------------------------------------------------------
//
// Global Variable Sections
//
//------------------------------------------------------
saveBtn = document.getElementById('save');
loadBtn = document.getElementById('load');
notesArea = document.getElementById('notesarea');


//-----------------------------------------------------
//
// Save the notes
//
//------------------------------------------------------
function saveNotes() {

}


//-----------------------------------------------------
//
// Load the Notes
// 
//-----------------------------------------------------
function loadNotes() {

}

//-----------------------------------------------------
//
// Add the notes to the text area 
//
//----------------------------------------------------
function addNotes() {

}


//=====================================================
//
// Event Listener
//
//=====================================================
saveBtn.addEventListener('click', saveNotes)
loadBtn.addEventListener('click', loadNotes)
notesArea.addEventListener('key', addNotes)