const buttons = document.querySelectorAll('.btn');
const storeItems = document.querySelectorAll('.store-item');
const searchField = document.querySelector('#search-item');


// FILTER
buttons.forEach(function(button) {
    button.addEventListener('click', (filterAction) => {
        filterAction.preventDefault();


        if (button.textContent === 'all'){
            storeItems.forEach(function(storeItem) {
                storeItem.style.display = 'block';
            })
        } else if (button.textContent === 'cakes'){
            storeItems.forEach(function(storeItem) {
                if (storeItem.dataset.item === 'cakes'){
                    storeItem.style.display = 'block';
                } else {
                    storeItem.style.display = 'none';
                }   
            }) 
        } else if (button.textContent === 'cupcakes'){
            storeItems.forEach(function(storeItem) {
                if (storeItem.dataset.item === 'cupcakes'){
                    storeItem.style.display = 'block';
                } else {
                    storeItem.style.display = 'none';
                };
            })
        }  else if (button.textContent === 'sweets'){
            storeItems.forEach(function(storeItem) {
                if (storeItem.dataset.item === 'sweets'){
                    storeItem.style.display = 'block';
                } else {
                    storeItem.style.display = 'none';
                }
            })
        }  else if (button.textContent === 'doughnuts'){
            storeItems.forEach(function(storeItem) {
                if (storeItem.dataset.item === 'doughnuts'){
                    storeItem.style.display = 'block';
                } else {
                    storeItem.style.display = 'none';
                }
            })
        }

    })
})

// SEARCH
searchField.addEventListener('input', () => {
    const searchText = searchField.value;
    storeItems.forEach(function(storeItem) {
        if (storeItem.dataset.item.indexOf(searchText) > -1){
            storeItem.style.display = 'block';
        } else {
            storeItem.style.display = 'none';
        }   
    })
})