var template = document.getElementById('ticket_template').content;
var ticketsBlock = document.querySelector('#tickets__block')
var counterInfo = document.querySelector('.counter')
var pageBtn = document.querySelector('.page__count')
var numberOfPages;
var counter = 1;


if(!localStorage.getItem('generalArr')){
    localStorage.setItem('generalArr', JSON.stringify(data))
}

var generalArr = JSON.parse(localStorage.getItem('generalArr'))

pageBtn.addEventListener('click', (event)=>{
    generalArr = JSON.parse(localStorage.getItem('generalArr'))
    numberOfPages = Math.ceil(generalArr.length/8)
    if(event.target.dataset.page === 'next'){
        if(counter < numberOfPages){
            counter += 1
            ticketsBlock.innerHTML = ''
            renderData(generalArr)
        }
    }
    if(event.target.dataset.page === 'prev'){
        if(counter > 1){
            counter -= 1
            ticketsBlock.innerHTML = ''
            renderData(generalArr)
        }
    }
})

renderData(data)

function renderData(arr){
    ticketsBlock.innerHTML = ''
    arr = JSON.parse(localStorage.getItem('generalArr'))

    if(arr.length < 8) var pageNumber = arr.length
    else pageNumber = counter*8
    
    if(pageNumber > arr.length) pageNumber = arr.length
    
    counterInfo.textContent = `${(counter-1)*8+1} - ${pageNumber} of ${arr.length}`;
    if(arr.length == 0) counterInfo.textContent = '0'

    arr = arr.slice((counter-1)*8, counter*8)
    arr.forEach(elem => {
        var cloneTemplate = document.importNode(template, true)
        
        let ticketImg = cloneTemplate.querySelector('#ticketImg')
        ticketImg.setAttribute('src', elem.ava)
        
        let ticketText = cloneTemplate.querySelector('#ticketText')
        ticketText.textContent = elem.text
        
        let ticketCompany = cloneTemplate.querySelector('#ticketCompany')
        ticketCompany.textContent = elem.company
        
        let ticketName = cloneTemplate.querySelector('#ticketName')
        ticketName.textContent = elem.name
        
        let ticketRegister = cloneTemplate.querySelector('#date_of_register')
        ticketRegister.textContent = elem.date_of_register
        
        let ticketOnline = cloneTemplate.querySelector('#date_of_onliine')
        ticketOnline.textContent = elem.date_of_onliine
        
        let ticketTime = cloneTemplate.querySelector('#time')
        ticketTime.textContent = elem.time
        
        let priority = cloneTemplate.querySelector('.priority')
        priority.textContent = elem.priority
        priority.classList.add(elem.priority)
        
        ticketsBlock.appendChild(cloneTemplate)
    })

}