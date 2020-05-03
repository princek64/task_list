document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form')
    const ul = document.getElementById('tasks')
    const input = document.getElementById('task')

    let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []

    localStorage.setItem('items', JSON.stringify(itemsArray))
    const data = JSON.parse(localStorage.getItem('items'))


    const liMaker = list => {
        const li = document.createElement('li')
        li.innerHTML = list;
        ul.appendChild(li)
    }
        
    form.onsubmit = (e) => {
        e.preventDefault()

        itemsArray.push(input.value)
        localStorage.setItem('items', JSON.stringify(itemsArray))
        
        liMaker(input.value)
        
        input.value = '';
    }

    data.forEach(item => {
        liMaker(item)
    })
    
})