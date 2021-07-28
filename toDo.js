let id = 0;

document.getElementById('btnAdd').addEventListener('click', () => {
    let dtCreate = new Date();
    let elemTable = document.getElementById('taskList');
    let dtStart = document.dataForm.startDateNew.value;
    let dtEnd = document.dataForm.endDateNew.value;
    console.log(`Dates: start - ${dtStart}, end - ${dtEnd}, `)

    // create a new row - didn't know about this.
    let row = elemTable.insertRow(1);
    row.setAttribute("id", `row-${id}`)
    row.insertCell(0).innerHTML = document.dataForm.taskNew.value;
    row.insertCell(1).innerHTML = dtCreate.toLocaleDateString();
    row.insertCell(2).innerHTML = dtFormat(document.dataForm.startDateNew.value);
    row.insertCell(3).innerHTML = dtFormat(document.dataForm.endDateNew.value);
    // create delete button in actions col.
    let cellActions = row.insertCell(4);
    cellActions.appendChild( createDeleteBtn(id) );
    id++;

    // clean out form values
    document.dataForm.taskNew.value = "";
    document.dataForm.endDateNew.value = "";
    document.dataForm.startDateNew.value = "";
});

function createDeleteBtn(id){
    let btn = document.createElement('BUTTON');
    btn.innerHTML = "Delete";
    btn.onclick = () => {
        console.log(`Delete row id: row-${id}`);
        let doomedRow = document.getElementById(`row-${id}`);
        doomedRow.parentNode.removeChild(doomedRow);
    };
    return btn;
}

function dtFormat(strIn){
    let dt = new Date(strIn+" 00:00:01");
    return dt.toLocaleDateString();
    /*
    let month = dt.getMonth()+1;
    let day =  dt.getDate(); 
    let year =  dt.getFullYear(); 
    return `${month}/${day}/${year}`;
    */
}