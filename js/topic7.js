
let form      = document.getElementById("addForm");
let itemList  = document.querySelector('#items');
let userAddedItem = 0;

//listening - adding to the list event
form.addEventListener('submit', addItem); 

//listening - deleting from the list event
itemList.addEventListener('submit', addItem); 


function addItem(e) {
    // you need this preventDefault to stop the natural action of the form in the HTML
    e.preventDefault();
    
    //get input VALUE - see and notice .value  (could have used queryselector but if you add something above, it would grab the wrong thing. )
    let newItem = document.getElementById("newItem").value;
    
    //The next 3 statements just basically format the HTML, so you can append it into the DOM. 
    //create a new li for the new item user wants to add to a list.
    let li = document.createElement('li');
    
    //add a classname to it
    li.classname = 'list-group-item';
    
    //add text node with input value
    li.appendChild(document.createTextNode(newItem));
    
    
//********* THIS SECTION IS TO ADD THE DELETE BUTTON ONLY IF IT HASN'T BEEN ADDED YET! *********************************************//
    
    if (userAddedItem == 0) {
        // Create a delete button to appear once a user has decided to add items to a list.
        let deleteBtn = document.createElement('button');

        //add a classname
        deleteBtn.classname = 'btn btn-dark float-right';

        //append text node
        deleteBtn.appendChild(document.createTextNode('delete new item'));

        //add an Id to it
        deleteBtn.id = 'deleteBtn';

        //get the position of where to place it. TRAVERSING THE DOM
        let divCont = document.querySelector('#sub-main');
        //console.log(divCont);

        //insert into the DOM before the h2 Items heading.
        divCont.insertBefore( deleteBtn, divCont.children[2]);
        
        // I added the deleter listener here because this element didn't exist before now.     
        let deleter = document.querySelector('#deleteBtn');
    
        //deleting from the list event
        deleter.addEventListener('click', removeItem ); 

    }
    
//*****************************************************************************************//    
    
    // APPENDING CHILD (listItem) to the DOM!!!!  add it to the DOM
    itemList.appendChild(li);
    // clear out or reset the form field.
    document.getElementById("addForm").reset();
    // this counter lets me know if the user added an item yet.
    userAddedItem = ++userAddedItem;
    
//******* END OF AddItem() FUNCTION! *****************************************************//    
}



function removeItem(e){
    
    if (itemList.childElementCount >= 5 ) {
    itemList.removeChild(itemList.lastElementChild);
    }
}


function radioBtn() {
   
    let rbutton1 = document.getElementById("rbutton1");
    let rbutton2 = document.getElementById("rbutton2");
    
    //console.log(itemList.parentNode);
    //console.log(document.body);
   
    if (rbutton1.checked == true) {
        
        //CHANGE THE TEXT INTO TRAVEL ITEMS
        var items = document.getElementsByClassName('list-group-item');
        items[0].textContent = 'Toiletries';
        items[1].textContent = 'Shorts';
        items[2].textContent = 'Tee shirts';
        items[3].textContent = 'Flip Flops';
        
        itemList.parentNode.style.backgroundColor = '#66cc00';
        itemList.previousElementSibling.textContent = 'Travel Packing List';
    }
 
    if (rbutton2.checked == true) {
        
        //CHANGE THE TEXT INTO GROCERY ITEMS
        var items = document.getElementsByClassName('list-group-item');
        items[0].textContent = 'Milk';
        items[1].textContent = 'Eggs';
        items[2].textContent = 'Bread';
        items[3].textContent = 'Lunchmeat';
        
        itemList.parentNode.style.backgroundColor = '#fdd735';
        itemList.previousElementSibling.textContent = 'Grocery List';
    }
    
} 