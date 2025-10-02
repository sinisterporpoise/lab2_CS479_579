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
  let items = document.querySelectorAll('li');
  let notes = []
  for (let i = 0; i < items.length; i++) {
    notes.push(items[i].innerText)
  }
  saveObject = JSON.stringify(notes);
  alert(saveObject);
	return;

}


//-----------------------------------------------------
//
// Load the Notes
// 
//-----------------------------------------------------
function loadNotes() {
	console.log ("loadNotes is working");
	notes = answer ("Enter your JSON-formatted object: ")
  notes = JSON.parse(notes);
  console.log(notes);
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
  let delBtn = document.createElement("button");
  delBtn.appendChild(document.createTextNode('X'))
  notestext.appendChild(delBtn);

  function highlight(e) {
    li.style.backgroundColor = 'yellow';
  }
  li.addEventListener("click", highlight)
  

  function deleteNoteItem () {
    notestext.remove();
  }
  delBtn.addEventListener("click", deleteNoteItem)
}


//=====================================================
//
// Event Listener
//
//=====================================================
saveBtn.addEventListener('click', saveNotes)
loadBtn.addEventListener('click', loadNotes)
sbmtBtn.addEventListener('click', addNotes)