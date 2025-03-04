function openModal() {
    document.getElementById("noteModal").classList.remove("hidden");
    document.getElementById("noteModal").classList.add("flex");
}

function closeModal() {
    document.getElementById("noteModal").classList.remove("flex");
    document.getElementById("noteModal").classList.add("hidden");
}

function saveNote() {
    let title = document.getElementById('noteTitle').value
    let text = document.getElementById('noteText').value
    let date = new Date().toDateString()

    if (title === "" || text === "") {
        alert("Please fill all fields!");
        return;
    }

    let notes = JSON.parse(localStorage.getItem("notes")) || []
    notes.push({ title, text, date })
    localStorage.setItem("notes", JSON.stringify(notes))

    displaynotes()
    closeModal()

    document.getElementById("noteTitle").value = "";
    document.getElementById("noteText").value = "";
}

window.onload = function () {
    displaynotes();
}

function displaynotes() {
    let notes = JSON.parse(localStorage.getItem("notes")) || []
    let container = document.querySelector(".add-notes");

    if (!container) {
        console.error("Container for notes not found!");
        return;
    }

    container.innerHTML = ""
    notes.forEach((note, index) => {
        container.innerHTML += ` <div
                    class="notes-div h-[250px] w-[250px] bg-white mt-10 ml-5 rounded-md overflow-hidden shadow-xl relative">
                    <div class="content h-[200px] overflow-y-scroll p-5 custom-scrollbar">
                        <span class="text-black font-sans block mb-3 ">${note.date}</span>
                         <hr class="border-t-2 border-black w-full pb-4">
                        <h3 class="text-black font-sans text-lg">${note.title}</h3>
                        <p class="text-black font-sans text-base">${note.text}</p>
                    </div>
                    <div class="button bg-white p-2 shadow-md absolute bottom-0 left-0 w-full">
                        <button class="px-6 py-1 bg-violet-400 text-white rounded-md mr-2 ml-5" onclick="editNote(${index})"><i
                                class="fa-solid fa-pen"></i></button>
                        <button class="px-6 py-1 bg-violet-400 text-white rounded-md" onclick="deleteNote(${index})"><i
                                class="fa-solid fa-trash"></i></button>
                    </div>
                </div>`
    })
}

let editIndex = null
function editNote(index) {
    let notes = JSON.parse(localStorage.getItem("notes")) || []
    editIndex = index;

    document.getElementById("noteTitle").value = notes[index].title
    document.getElementById("noteText").value = notes[index].text

    document.getElementById("saveButton").classList.add("hidden")
    document.getElementById("updateButton").classList.remove("hidden");

    openModal();
}

function updateNote() {
    let notes = JSON.parse(localStorage.getItem("notes")) || []
    if (editIndex !== null) {
        notes[editIndex].title = document.getElementById("noteTitle").value
        notes[editIndex].text = document.getElementById("noteText").value

        localStorage.setItem("notes", JSON.stringify(notes))
        displaynotes()
        closeModal()

        editIndex = null
        document.getElementById("saveButton").classList.remove("hidden");
        document.getElementById("updateButton").classList.add("hidden");
    }
}

function deleteNote(index) {
    if (confirm("Are you sure you want to delete this note?")) {
        let notes = JSON.parse(localStorage.getItem("notes")) || [];
        notes.splice(index, 1)
        localStorage.setItem("notes", JSON.stringify(notes));
        displaynotes();
    }
}