const inputElement = document.querySelector(".new-task-input");
const addTaskButton = document.querySelector(".new-task-button");

const tasksContainer = document.querySelector(".tasks-container");

const validateInput = () => inputElement.value.trim().length > 0;
    //o código acima também poderia ser feito da seguinte forma: 
    //if (inputElement.value.trim().length > 0) {
    //    return true;
    //} else {
    //    return false;
    //}

    const handleAddTask = () => {
        const inputIsValid = validateInput();

        if (!inputIsValid){
            return inputElement.classList.add("error");
        }

        const taskItemContainer = document.createElement('div');//criar um elemento no Js
        taskItemContainer.classList.add('task-item');//criar uma classe para o elemento

        const taskContent = document.createElement('p');//conteúdo da tarefa - parágrafo que vai dentro da div
        taskContent.innerText = inputElement.value;

        taskContent.addEventListener('click', () => handleClick(taskContent));

        const deleteItem = document.createElement('i');//criar o elemento ícone 
        deleteItem.classList.add('far');//adicionar as classes necessárias a ele
        deleteItem.classList.add('fa-trash-can');

        deleteItem.addEventListener('click', () => handleDeleteClick(taskItemContainer, taskContent));

        taskItemContainer.appendChild(taskContent);
        taskItemContainer.appendChild(deleteItem);

        tasksContainer.appendChild(taskItemContainer);

        inputElement.value = "";
  
    };

    const handleClick = (taskContent) => {
        const tasks = tasksContainer.childNodes;

        for (const task of tasks){
            const currentTaskIsBeingClicked = task.firstChild.isSameNode(taskContent);
        
            if(currentTaskIsBeingClicked) {
                task.firstChild.classList.toggle("completed");
            }
        }
    };

    const handleDeleteClick = (taskItemContainer, taskContent) => {
        const tasks = tasksContainer.childNodes;

        for (const task of tasks){
            const currentTaskIsBeingClicked = task.firstChild.isSameNode(taskContent);
           
            if(currentTaskIsBeingClicked) {
                taskItemContainer.remove();
            }
        }
    };

    const handleInputChange = () => {
        const inputIsValid = validateInput();

        if (inputIsValid) {
            return inputElement.classList.remove("error");
        }
    };

    addTaskButton.addEventListener("click", () => handleAddTask());

    inputElement.addEventListener("change", () => handleInputChange());