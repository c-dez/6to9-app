const taskList = []

const submit = document.querySelector('#submit')

const addToList = ()=>{
    const inputTask = document.querySelector('#inputTask')
    taskList.push(inputTask.value)
    console.log(taskList)
    inputTask.value = ''
}

submit.addEventListener('click',addToList)