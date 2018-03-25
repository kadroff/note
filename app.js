add_note.onclick = (function(){
  var title = document.createElement("INPUT");
  title.setAttribute("type", "text");
  right_column.appendChild(title);

  var name = document.createElement("INPUT");
  name.setAttribute("type", "text");
  right_column.appendChild(name);

  create_note.onclick = (function(){
    let value_title = title.value;
    let create_element = document.createElement("li");
    create_element.innerHTML = '<h3>' + value_title + '</h3>';
    note.appendChild(create_element);

    let value_name = document.createElement("li");
    note.appendChild(create_element);
  });
});

