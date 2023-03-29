//Get Reference of AddNote Button

// Update Data Using Local Stroage
const UpdateLsData=()=>{
    const TextAreaData=document.querySelectorAll('textarea');
    const notes=[];
    TextAreaData.forEach((note)=>{
        notes.push(note.value);
    });

    //Set Item in Local Stroage
    localStorage.setItem('Notes',JSON.stringify(notes));



}
const addBtn=document.getElementById('add');
const addNewNotes=(text="")=>{
    //create New Div
    const note=document.createElement("div");
    //Add the className
    note.classList.add("note");
    const htmlData=`<div class="operation">
    <button class="edit"><img  src="edit-solid.svg"></img></button>
    <button class="delete"><img  src="trash-alt-solid.svg"></img></button>
    </div>
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text? "hidden":""}" placeholder="Add Your Note Today.."></textarea>`;
    //Insertelement Afterbegin
    note.insertAdjacentHTML('afterbegin',htmlData);
    //append that in body
    document.body.appendChild(note);

    //Get Reference Of All Value..
    const deleteBtn=note.querySelector('.delete')
    const editBtn=note.querySelector('.edit');
    const mainDiv=note.querySelector('.main');
    const textArea=note.querySelector('textarea');

    //Edit button Operation
    editBtn.addEventListener('click',()=>{
        mainDiv.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    });

    //showing data in maindiv
    textArea.addEventListener('change',(e)=>{
        const data=e.target.value;
        mainDiv.innerHTML=data;
        UpdateLsData();
    })

    //Delete Operation
    textArea.value=text;
    mainDiv.innerHTML=text;
    deleteBtn.addEventListener('click',()=>{
        note.remove();
        UpdateLsData();
    });

}
//Getting Data from Local Stroage
const NotesData=JSON.parse(localStorage.getItem('Notes'));
if(NotesData){

    NotesData.forEach((note)=>{
        addNewNotes(note);
    })
}
addBtn.addEventListener('click',()=>addNewNotes());




//Add footer

const footer=document.createElement('footer');

const htmlData=`        <p>Devloped By Our Team</p> <br />
<p>All fonts and svg &copy; from fontawsome.com<br /> All Rights reserved</p>`;
footer.insertAdjacentHTML('afterbegin',htmlData);

 document.body.append(footer);
