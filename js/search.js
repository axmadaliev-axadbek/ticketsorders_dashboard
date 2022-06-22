const searchBlock = document.querySelector('.search__block')
const input = document.querySelector('.menu__input')
const search = document.querySelector('.search')
const searchIcon = document.querySelector('.menu__search')

let filteredArr; //array where users will be filtered

window.addEventListener('click', event => {
    // if you click on the search icon, then close the search icon and display the search input
    if(event.target.dataset.search == 'icon'){
        event.target.style.display="none"
        searchBlock.style.display="flex"
    }
    
    // if the click happened not in the input and in the search icon, then close the search input
    if(event.target.dataset.search !== 'input' && event.target.dataset.search !== 'icon'){
        searchIcon.style.display="flex"
        searchBlock.style.display="none"
    }

    // if the click happened in the inscription Tikets, then we return everything to its initial position
    if(event.target.dataset.reset === 'reset'){ //
        counter = 1
        
        localStorage.setItem('generalArr', JSON.stringify(data))

        renderData(generalArr)
    }
})

input.addEventListener('keyup', ()=>{
    counter = 1

    let inputValue = input.value
    // filter objects by data in input and push to filteredArr
    filteredArr = data.filter(element => {
        return element.name.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())
    })

    localStorage.setItem('generalArr', JSON.stringify(filteredArr))

    renderData(generalArr)
})