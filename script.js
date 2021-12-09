let entryCount = 0; 

function addEntry(inputvalue, listvalue) {
    const text = document.getElementById(inputvalue).value; 
    const box = document.getElementById(listvalue);

    box.innerHTML += `<li id="${entryCount}">` + text + ` <button id="${entryCount}" onclick="removeEntry(${entryCount.toString()})">Remove</button>` + '</li>';
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