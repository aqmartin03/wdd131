const form = document.querySelector("#eventForm");
const whatType = document.querySelector("#whatType");
const notesContainer = document.querySelector("#notesContainer");
const notes = document.querySelector("#notes");
const output = document.querySelector("#output");
const notesLabel = document.querySelector("#notesLabel");

function updateNotesField() {
    const value = whatType.value;

    if (value === "student") {
        notesContainer.hidden = false;
        notes.required = true;
        notesLabel.textContent = "Student I#";
    }
    else if (value === "guest") {
        notesContainer.hidden = false;
        notes.required = true;
        notesLabel.textContent = "Access Code";
    }
    else {
        notesContainer.hidden = true;
        notes.required = false;
    }
}

whatType.addEventListener("change", updateNotesField);
updateNotesField();

// Make sure the user selects a date that is later than today.
function isPastDate(e) {
    const today = new Date();
    const choice = new Date(e);
    return choice < today;
}

form.addEventListener("submit", function(event) {
    event.preventDefault();
    output.textContent = "";

    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const type = form.whatType.value;
    const eventDate = form.eventDate.value;
    const note = form.notes.value.trim();

    if (type === "student" && !/^\d{9}$/.test(note)) {
        output.textContent = "Student I# must be 9 digits";
        return;
    }

    if (type === "guest" && note != "EVENT131") {
        output.textContent = "Sorry, please insert the correct access code.";
        return;
    }

    if (isPastDate(eventDate)) {
        output.textContent = "Please choose a later date.";
        return;
    }

    output.innerHTML = `
    <h2>Ticket Created</h2>
    <p>${firstName} ${lastName}</p>
    <p>${type}</p>
    <p>${email}</p>
    <p>${eventDate}</p>
    `

    form.reset();
    updateNotesField();
})