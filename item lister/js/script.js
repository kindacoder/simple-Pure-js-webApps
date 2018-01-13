var header = document.querySelector('#main-header');
header.style.border = "solid 1px red"
header.style.borderRadius = "5px"

var formInput = document.getElementById('input-form');
var formSubmit = document.getElementById('submit-form');
formSubmit.addEventListener('click', addItem);
///get list item-
var itemList = document.getElementById('items');

///delete event-
itemList.addEventListener('click', removeItem);

///searching the item- filter--
var filter = document.getElementById('filter');
filter.addEventListener('keyup', filterItems);






//add item-
function addItem(e) {
    e.preventDefault();
    var inputValue = formInput.value
        //create new li element-
    var li = document.createElement('li');
    li.className = "list-group-item";
    //add text node with input value-
    li.appendChild(document.createTextNode(inputValue))
        ///create edit buttons-
    var deleteButton = document.createElement('button');
    deleteButton.className = "btn btn-danger btn-sm delete float-right";
    // add text to button-
    deleteButton.appendChild(document.createTextNode('X'));
    /// append to li-
    li.appendChild(deleteButton)
        ///create delete button-
    var editButton = document.createElement('buuton');
    editButton.className = "btn btn-primary mr-3 btn-sm  float-right";
    //add text to delete
    editButton.appendChild(document.createTextNode('EDIT'));
    ///append to li-
    li.appendChild(editButton);
    // document.getElementById('input-form').onkeyup = function(e){
    //    if(e.keyCode == 13){
    //      formSubmit.click();
    //      itemList.appendChild(li);
    //    }
    // };

    itemList.appendChild(li);


}

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are You Sure ?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }

    }


}

//
function filterItems(e) {
    //get the text-
    var text = e.target.value.toLowerCase();
    //get lis
    var items = itemList.getElementsByTagName('li');

    ///Convert in array-
    Array.from(items).forEach(function(item) {
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            //matched-
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }

    })

}
