const buttons = document.querySelectorAll('.btn');
const storeItems = document.querySelectorAll('.store-item');

buttons.forEach(function(button) {
    button.addEventListener('click', (filterAction) => {
        filterAction.preventDefault();

        // WRONG CODE
        
        // if (button.textContent === 'all'){
        //     storeItems.forEach(function(storeItem) {
        //         storeItem.style.display = 'block';
        //     })
        // } else if (button.textContent === 'cakes'){
        //     storeItems.forEach(function(storeItem) {
        //         storeItem.style.display = 'block';
        //     }) 
        // } else if (button.textContent === 'cupcakes'){
        //     storeItems.forEach(function(storeItem) {
        //         storeItem.style.display = 'block';
        //     })
        // }  else if (button.textContent === 'sweets'){
        //     storeItems.forEach(function(storeItem) {
        //         storeItem.style.display = 'block';
        //     })
        // }  else if (button.textContent === 'doughnuts'){
        //     storeItems.forEach(function(storeItem) {
        //         storeItem.style.display = 'block';
        //     })
        // }

    })
})