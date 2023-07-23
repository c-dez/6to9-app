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

        list.appendChild(createAddBtn())
        list.appendChild(createEraseBtn())

       

    
    
}
submit.addEventListener('click',addToArray)

function createAddBtn(){
    const addBtn = document.createElement('button');
    addBtn.classList.add('add')
    addBtn.innerHTML = '<img src="./icons/check-bold.png"></img>'
    addBtn.style.backgroundColor = 'green'
    return addBtn

}

function createEraseBtn(){
    const eraseBtn = document.createElement('button')
    eraseBtn.classList.add('erase')
    eraseBtn.innerHTML = '<img src="./icons/cancel.png"></img>'
    eraseBtn.style.backgroundColor = 'red'
    return eraseBtn;

}

const list = document.querySelector('.list');
const autoGenerateList = ()=>{
    taskList.forEach((item)=>{
        const taskItem = document.createElement('div');
        list.appendChild(taskItem)
        taskItem.textContent = item;

        
        list.appendChild(createAddBtn())//
       
        
        list.appendChild(createEraseBtn())
       

    })
}
autoGenerateList()

