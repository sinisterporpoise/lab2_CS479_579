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
const saveBtn = document.getElementById('save');
const loadBtn = document.getElementById('load');
const notesArea = document.getElementById('notesarea');
const sbmtBtn = document.getElementById('sbmtBtn')

//-----------------------------------------------------
//
// Save the notes
//
//------------------------------------------------------
function saveNotes() {
	console.log("Save notes is working");
	return;
}


//-----------------------------------------------------
//
// Load the Notes
// 
//-----------------------------------------------------
function loadNotes() {
	console.log ("loadNotes is working");
	return;
}

//-----------------------------------------------------
//
// Add the notes to the text area 
//
//----------------------------------------------------
function addNotes(e) {
  e.preventDefault();
  let text = notesArea.value;
  console.log(text);
  let ul = notestext.querySelector('ul');
  if (!ul) {
  	ul = document.createElement("ul");
      notestext.appendChild(ul);
  }
  let li = document.createElement("li")
  li.textContent = text;
  ul.appendChild(li);

  notesArea.value = "";
}


//=====================================================
//
// Event Listener
//
//=====================================================
saveBtn.addEventListener('click', saveNotes)
loadBtn.addEventListener('click', loadNotes)
sbmtBtn.addEventListener('click', addNotes)