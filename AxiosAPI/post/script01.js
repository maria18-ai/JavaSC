const taskTitle = document.getElementById("taskTitle");
const result = document.getElementById("result");

function createTask() {
    axios 
        .get('https://jsonplaceholder.typicode.com/todos', {
            title: taskTitle,
            userId: 1,
            completed: false
        })
        .then(res => {
            const newTask = res.data

            result.innerHTML = `Nova tarefa criada ${newTask.title}`
        })
        .catch(err => console.error("Erro a criar as tarefas", err))
}