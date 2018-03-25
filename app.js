add_note.onclick = (function(){
  var title = document.createElement("INPUT");
  title.setAttribute("type", "text");
  right_column.appendChild(title);

  var name = document.createElement("INPUT");
  name.setAttribute("type", "text");
  right_column.appendChild(name);

  create_note.onclick = (function(){
    let create_element = document.createElement("li");
    create_element.innerHTML = '<h3>' + title.value + '</h3>' + '<p>' + name.value + '</p>';
    note.appendChild(create_element);
  });
});

