

let notes = JSON.parse(localStorage.getItem('notes')) || [];
let note = '';

const editor = document.querySelector('#editor');
const right_column = document.querySelector('#right_column');
const notesList = document.querySelector('#noteList');

editor.onkeyup = () => {
  note = editor.value;
  localStorage.setItem('note', note);
}

function newNote() {
  notes.push(note);
  localStorage.setItem('notes', JSON.stringify(notes));
  renderNotes();

  note = '';
  editor.value = note;
}

function renderNotes() {
	notesList.innerHTML = ''; 
	notes.forEach(note => {
  	li = document.createElement('li');
    li.innerText = note;
  	notesList.appendChild(li);
  });
}

renderNotes();





