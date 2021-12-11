let entryCount = 0; 

function addEntry(inputvalue, listvalue) {
    const textInput = document.getElementById(inputvalue).value; 
    const listValue = document.getElementById(listvalue);
    
    // Set up the invalid input error message if required
    const errorSpan = document.createElement('span');
    errorSpan.setAttribute("id", `errorMessage${listvalue.charAt(4)}`);

    //Get the display error element
    const existingErrorElement = document.getElementById(`displayError${listvalue.charAt(4)}`);

    // Remove invalid input error if it is already showing
    if (existingErrorElement.hasChildNodes()){
        const existingError = document.getElementById(`errorMessage${listvalue.charAt(4)}`);
        existingError.remove();
    }

    // If the input is empty/null, display error and return
    if(textInput == "") {
        const errorMessage = document.createTextNode("Invalid input");
        errorSpan.append(errorMessage);

        existingErrorElement.append(errorSpan);
        return;
    }

    listValue.innerHTML += `<li id="${entryCount}">` + textInput + ` <button id="${entryCount}" onclick="removeEntry(${entryCount.toString()})">Remove</button>` + '</li>';
    entryCount += 1;

    // Clear the text from input box after submitting
    document.getElementById(inputvalue).value = "";
}

function removeEntry(id) {
    const elementToRemove = document.getElementById(id);
    elementToRemove.remove();
}

add1.addEventListener('click', addEntry.bind(this,"inputEntry1", "list1"));
add2.addEventListener('click', addEntry.bind(this, "inputEntry2", "list2"));
add3.addEventListener('click', addEntry.bind(this, "inputEntry3", "list3"));
add4.addEventListener('click', addEntry.bind(this, "inputEntry4", "list4"));