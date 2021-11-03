var input = document.querySelector("input[type = 'text']");
var ul = document.querySelector("ul");
var container = document.querySelector("div");
var lists = document.querySelectorAll("li");
var spans = document.getElementsByTagName("span");
var pencil = document.querySelector("#pencil");
var saveBtn = document.querySelector(".save");
var addBtn = document.querySelector(".add");

function deleteTodo(){
  for(let span of spans){
    span.addEventListener ("click",function (){
      span.parentElement.remove();
      event.stopPropagation();
    });
  }
}

function loadTodo(){
  if(localStorage.getItem('todoList')){
    ul.innerHTML = localStorage.getItem('todoList');
    deleteTodo();
  }
}

input.addEventListener("keypress",function(keyPressed){
  if(keyPressed.which === 13){
    var li = document.createElement("li");
    var spanElement = document.createElement("span");
    var icon = document.createElement("i");
        
    var newTodo = this.value;
    this.value = " " ;
        
    icon.classList.add('fas', 'fa-trash-alt');
    spanElement.append(icon);
    ul.appendChild(li).append(spanElement,newTodo);

    deleteTodo();
    
    }
    
});

ul.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  },false
);

pencil.addEventListener('click', function(){
  input.classList.toggle('display');
});

saveBtn.addEventListener('click',function(){
  localStorage.setItem('todoList',ul.innerHTML );
  
});

addBtn.addEventListener('click',function(){
  var li = document.createElement("li");
  var spanElement = document.createElement("span");
  var icon = document.createElement("i");
      
  var newTodo = input.value;
  input.value = " " ;
      
  icon.classList.add('fas', 'fa-trash-alt');
  spanElement.append(icon);
  ul.appendChild(li).append(spanElement,newTodo);

  deleteTodo();    
});

deleteTodo();

loadTodo();