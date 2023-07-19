const taskList = []

const submit = document.querySelector('#submit')

const addToArray = ()=>{
    const inputTask = document.querySelector('#inputTask')
    if(inputTask.value){

        taskList.push(inputTask.value)
        console.log(taskList)
        createList()
        inputTask.value = ''
    }
}


const createList = ()=>{
    const list = document.querySelector('.list')
   
        let task = document.createElement('div')
        task.textContent = taskList[taskList.length -1]
        list.appendChild(task)
    
    
}
submit.addEventListener('click',addToArray)

