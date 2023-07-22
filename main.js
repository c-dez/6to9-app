const taskList = ['ejercicio', 'trabajo','estudio', 'limpiar', 'cocinar' , 'jugar gatos','cocinar',
'relajarme', 'leer','japones','arena gatos', 'super', 'patio','ropa','planear viaje']

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
        const createAddEraseBtns = ()=>{
            let add = document.createElement('button');
            add.textContent = 'Add'
            add.classList.add('add')
            list.appendChild(add)

            let remove = document.createElement('button')
            remove.textContent = 'Erase'
            remove.classList.add('erase')
            list.appendChild(remove)
        }
        createAddEraseBtns()

    
    
}
submit.addEventListener('click',addToArray)
