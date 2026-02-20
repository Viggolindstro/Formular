const form = document.getElementById("contactForm");
const errorDiv = document.getElementById("errorMessages");

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
        errors.push("Namn måste vara 2-50 bokstäver.");
    }

    //E-post-validering
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.push("Ange en giltig e-postadress");
    }

    //Meddelande-validering
    if (message.length < 10 || message.length > 500) {
        errors.push("Meddelandet måste vara mellan 10 och 500 tecken.");
    }

    // Ämne-validering
    if (subject ==="") {
        errors.push("Välj ett ämne.");
    }

    // Checkbox-validering
    if (!terms) {
        errors.push("Du måste godkänna villkoren.");
    }
    if (errors.length > 0) {
        event.preventDefault(); //Stoppar formuläret från att skickas
        errorDiv.innerHTML ="<ul><li>" + errors.join ("</li><li>") + "</li></ul>";
    }
});
 