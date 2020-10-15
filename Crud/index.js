const db = firebase.firestore();

const taskForm = document.getElementById("task-form");


const saveTask = (title,description) =>
    db.collection('task').doc().set({
        title,
        description
    });

const getTasks = () => db.collection('task').get();

taskForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = taskForm['task-title'];
    const description = taskForm['task-description'];
    
    await saveTask(title.value,description.value)
    
    taskForm.reset()
    title.focus()

})