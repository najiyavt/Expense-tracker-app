function handleFormSubmit(event){
    event.preventDefault();

    const amount = event.target.amount.value;
    const description = event.target.desc.value;
    const category = event.target.cat.value;
    
    const userDetails = {
        amount : amount ,
        description : description,
        category : category
    }

    localStorage.setItem('User Details' , JSON.stringify(userDetails));
   showUserONScreeen(userDetails);
}
function showUserONScreeen(userDetails){
    
    const parentList = document.getElementById('listItem');
    const listItem = document.createElement('li');
   
    listItem.textContent = `${userDetails.amount}-${userDetails.category}-${userDetails.description}`;
   
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete Expense';
  
    deleteBtn.addEventListener('click' ,function(){
        localStorage.removeItem('User Details');
        listItem.remove();
        editBtn.addEventListener('click', function() {
        });
    });

    const editBtn = document.createElement('button');
    editBtn.className='edit';
    editBtn.textContent = 'Edit Expense';
    deleteBtn.classList.add('btn');

    editBtn.addEventListener('click', function () {
        listItem.contentEditable = true; 
    });

  
    listItem.appendChild(deleteBtn);
    listItem.appendChild(editBtn);
    parentList.appendChild(listItem);
}

module.exports = handleFormSubmit;