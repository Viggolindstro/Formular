const form = document.getElementById("contactForm");
const errorDiv = document.getElementById("errorMessages")

form.addEventListener("submit", function(event) {

    errorDiv.innerHTML = "";// Rensa tidigare fel
    let errors = [];
    
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const subject = document.getElementById("subject").value;
    const terms = document.getElementById("terms").checked;

    // Namn validering
    if (!/^[A-Za-zÅÄÖåäö]{2,50}$/.test(name)) {
        errors.push("Namn måste vara 2-50 bokstäver kycklingko.");
    }
    //E-post-validering
    if (!/^[^\s@)]+@[^\s@]+\.[]