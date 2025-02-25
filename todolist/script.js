const form = document.querySelector("form");
const todoInput = document.querySelector("#todo-input");
const addButton = document.querySelector("#add-button");
const todoList = document.querySelector("#todo-list");

let todos = [];

function addTodo() {
    const todoText = todoInput.value;

    if (todoText.length > 0) {
        const todo = {
            id: Date.now(),  // ควรใส่วงเล็บเพื่อให้เป็น timestamp จริงๆ
            text: todoText,
            completed: false
        };
        
        todos.push(todo);  // แก้ไขเป็น todos.push(todo)
        renderTodo();      // เรียก renderTodo ใหม่หลังจากเพิ่มงาน

        console.log(todo.id);
        console.log(todo.text);
        console.log(todo.completed);

        todoInput.value = "";  // เคลียร์ช่องกรอกหลังจากเพิ่มงาน
    }
}

function deleteTodo(id) {
    // ลบ todo ที่มี id ตรงกับที่รับเข้ามา
    todos = todos.filter(todo => todo.id !== id);
    renderTodo();  // เรียก renderTodo ใหม่หลังจากลบ
}

function renderTodo() {
    todoList.innerHTML = '';  // ล้างรายการเดิม

    todos.forEach((todo) => {
        const todoItem = document.createElement("li");     // สร้าง <li> element
        const todoText = document.createElement("span");   // สร้าง <span> element
        const deleteButton = document.createElement("button");  // สร้าง <button> element

        todoText.textContent = todo.text;  // กำหนดข้อความใน <span>
        deleteButton.textContent = "Delete";  // กำหนดข้อความใน <button>

        // เพิ่ม <span> และ <button> ลงใน <li>
        todoItem.appendChild(todoText);
        todoItem.appendChild(deleteButton);  // เพิ่ม deleteButton ใน <li>
        
        // กำหนดให้ปุ่มลบทำงานเมื่อถูกคลิก
        deleteButton.addEventListener("click", () => deleteTodo(todo.id));
        
        // เพิ่ม <li> ลงใน <ul>
        todoList.appendChild(todoItem);
    });
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    addTodo();  // เรียกใช้ฟังก์ชัน addTodo
});

renderTodo();  // เรียก renderTodo เพื่อแสดงรายการที่มีอยู่ (ถ้ามี)
