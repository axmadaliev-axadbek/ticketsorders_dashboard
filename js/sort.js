var allTickets = document.querySelector('.info')
var sortDrobdown = document.getElementById('sort_drobdown')
var filterDrobdown = document.getElementById('filter')

var priorityDrobdown = document.getElementById('priority_drobdown');

allTickets.addEventListener('click', (event) => {
    // ==============  SORT  ===================
    // if sort is clicked, sort types are opened
    if(event.target.dataset.sort === 'sort'){
        sortDrobdown.style.display="flex"
    }
    
    // if the click did not happened in sort, then sort types are closed
    if(event.target.dataset.sort !== 'sort'){
        sortDrobdown.style.display="none"
    }

    // if the click happened on in alphaber order, then the users are sorted by name and rendered
    if(event.target.dataset.sort === 'ascending-name'){
        counter = 1

        filteredArr = data.sort((a, b) =>{
            if(a.name > b.name) return 1
            else return -1 
        })

        localStorage.setItem('generalArr', JSON.stringify(filteredArr))
        renderData(generalArr)
    }

    // if the click happened on against alphaber order then users are sorted against alphabetical order and rendered
    if(event.target.dataset.sort === 'descending-name'){
        counter = 1

        filteredArr = data.sort((a, b) =>{
            if(a.name < b.name) return 1
            else return -1
        })

        localStorage.setItem('generalArr', JSON.stringify(filteredArr))
        renderData(generalArr)
    }

    // if the click happened on by online time then users are sorted by online time and rendered
    if(event.target.dataset.sort === 'ascending-time'){
        counter = 1

        pushMin()

        filteredArr = data.sort((a, b) => {
            if(a.min > b.min) return 1
            else return -1
        })

        localStorage.setItem('generalArr', JSON.stringify(filteredArr))
        renderData(generalArr)
    }

    // if the click happened on against online time then users are sorted against online time and rendered
    if(event.target.dataset.sort === 'descending-time'){
        counter = 1

        pushMin()

        filteredArr = data.sort((a, b) => {
            if(a.min < b.min) return 1
            else return -1
        })

        localStorage.setItem('generalArr', JSON.stringify(filteredArr))
        renderData(generalArr)
    }

     // ==============  FILTER  ===================
     // if filter is clicked, filter types are opened
     if(event.target.dataset.filter === 'filter'){
        filterDrobdown.style.display="flex"
     }

     // if the click did not happened in sort, then filter types are closed
     if(event.target.dataset.filter !== 'filter'){
        filterDrobdown.style.display="none"
     }

     //if the click happened on high then users are filtered on priority high and rendered
     if(event.target.dataset.filter === 'high'){
        counter = 1

        filteredArr = data.filter(elem => {
             return elem.priority == 'high'
         })

        localStorage.setItem('generalArr', JSON.stringify(filteredArr))

        renderData(generalArr)
     }

     //if the click happened on normal then users are filtered on priority normal and rendered
     if(event.target.dataset.filter === 'normal'){
        counter = 1

        filteredArr = data.filter(elem => {
            return elem.priority == 'normal'
        })

        localStorage.setItem('generalArr', JSON.stringify(filteredArr))

        renderData(generalArr)
    }

    //if the click happened on low then users are filtered on priority low and rendered
    if(event.target.dataset.filter === 'low'){
        counter = 1

        filteredArr = data.filter(elem => {
            return elem.priority == 'low'
        })

        localStorage.setItem('generalArr', JSON.stringify(filteredArr))
        
        renderData(generalArr)
    }

    // ==============  PRIORITY  ===================

    if(event.target.dataset.priority === 'priority'){
        priorityDrobdown = event.target.closest('div').querySelector('#priority_drobdown')
        priorityDrobdown.style.display="flex"
    }
    if(event.target.dataset.priority !== 'priority'){
        priorityDrobdown.style.display="none"
    }

    if(event.target.dataset.priority === 'high') changePriorty(event, 'high')

    if(event.target.dataset.priority === 'normal') changePriorty(event, 'normal')

    if(event.target.dataset.priority === 'low') changePriorty(event, 'low')

    if(event.target.dataset.priority === 'delete'){
        let ticketCard = event.target.closest(".ticket")
        generalArr.forEach((elem, index)=> {
            if(elem.name.includes(ticketCard.querySelector('#ticketName').textContent)){
                generalArr.splice(index, 1)
            }
        })

        localStorage.setItem('generalArr', JSON.stringify(generalArr))

        ticketCard.remove()   
    }
})

function pushMin(){
    data.forEach(elem => {
        let date1 = new Date(`${elem.date_of_onliine} ${elem.time}`)
        let dateNow = new Date();
        let diff = new Date(dateNow - date1);
        elem['min'] = +diff/600
    })
}

function changePriorty(event, changePriority){
    let ticketCard = event.target.closest(".ticket")
    ticketCard.querySelector('#priority').textContent = changePriority
    ticketCard.querySelector('#priority').className = `priority ${changePriority}`

    generalArr.forEach(elem => {
        if(elem.name.includes(ticketCard.querySelector('#ticketName').textContent)){
            elem.priority = changePriority
        }
    })
    
    localStorage.setItem('generalArr', JSON.stringify(generalArr))
}