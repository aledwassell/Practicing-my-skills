var todoList={todos:[],displayTodos:function(){if(0===this.todos.length)console.log("The todo list is empty!");else{console.log("My Todos:");for(var o=0;o<this.todos.length;o++)this.todos[o].completed===!0?console.log("(o)",this.todos[o].todoText):console.log("(x)",this.todos[o].todoText)}},addTodo:function(o){this.todos.push({todoText:o,completed:!1}),this.displayTodos()},changeTodos:function(o,t){this.todos[o].todoText=t,this.displayTodos()},deleteTodos:function(o){this.todos.splice(o,1),this.displayTodos()},toggleCompleted:function(o){var t=this.todos[o];t.completed=!t.completed,this.displayTodos()},toggleAll:function(){for(var o=this.todos.length,t=0,s=0;o>s;s++)this.todos[s].completed===!0&&t++;if(t===o)for(var s=0;o>s;s++)this.todos[s].completed=!1;else for(var s=0;o>s;s++)this.todos[s].completed=!0;this.diplayTodos()}};