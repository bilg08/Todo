function Todo(id, title,isCompleted=false){
 this.id=id;
 this.title=title;
 this.isCompleted=isCompleted;
}

let todos=[];
let id=0;

doneCheck();
document.addEventListener("keypress",function(event){
   if(event.keyCode===13)
   {
       addTodo();
       console.log(addTodo)
       draw()
   }
});

document.getElementById("nemeh").addEventListener("click",function(){
    addTodo();
    draw()
})


function addTodo(){
    let title=document.getElementById("title");
    const todo=new Todo(id,title.value);
    id++;
    todos.push(todo);
    title.value="";
}




const listcontainer=document.getElementsByClassName("listcontainer")[0];
console.log(listcontainer);


function deleteItem(el){
    const itemId=parseInt(el.parentNode.getAttribute("data"));
    console.log(itemId);
    todos.forEach((todo)=>{
        if(todo.id===itemId)
        {
            console.log("hehe",todos.indexOf(todo));
            todos.splice(todos.indexOf(todo),1)
        }
    })
   
    draw();
}



function done(el){
    const doneBtn=document.getElementsByClassName("doneBtn");
    const add=parseInt(el.parentNode.getAttribute("data"));
    
    todos.forEach((todo)=>{
        if(todo.id===add)
        {
            todo.isCompleted=true;
        }
    })
    doneCheck();

        
}
function doneCheck() {
    const thisDone=document.getElementsByClassName("ThisDone");
    const todoList=document.getElementsByClassName("listBox");
    const donebtn=document.getElementsByClassName("doneBtn");
        
    
    console.log(todoList.length);
    for(let i=0;i<todos.length;i++)
    {
        console.log(todos[i]);
        if(todos[i].isCompleted===true)
        {
            thisDone[i].style.display="block";
            donebtn[i].style.display="none";

        }
    }
    

}





function draw(){
     listcontainer.innerHTML='';
    todos.forEach((item)=>{
        const list=`<div class="listBox" data="${item.id}">
        <div class="listText">${item.title}</div>
        <div class="zurag">
        </div>
        <p class="ThisDone">Дууссан</p>
        <button class="doneBtn" onclick="done(this)" data="${item.id}">Done</button>
        <i id="delete" onclick="deleteItem(this)" class="fa-solid fa-circle-xmark"></i><img src ="">
    </div>
        `;
         listcontainer.innerHTML += list;
    });
    doneCheck();
    
}
