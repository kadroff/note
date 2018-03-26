var noteList = [];

add_note.onclick = (function(){
  var title = document.createElement("INPUT");
  title.setAttribute("type", "text");
  title.className = "input_title";
  right_column.appendChild(title);

  var name = document.createElement("INPUT");
  name.setAttribute("type", "text");
  name.className = "input_name";
  right_column.appendChild(name);

  create_note.onclick = (function(){
    var list = {};
    list.note = title.value;
    list.check = false;
    var noteList_len = noteList.length;
    noteList[noteList_len] = list;

    let create_element = document.createElement("li");
    create_element.innerHTML = '<input type="radio">' + '<h3>' + title.value + '</h3>' + '<p>' + name.value + '</p>';
    note.appendChild(create_element); 
  });
});


