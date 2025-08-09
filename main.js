function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let errorMessage = document.getElementById("errorMessage");
    errorMessage.innerHTML = "";

    let nameRegex = /^[a-zA-Z\s]+$/;  
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    let phoneRegex = /^[0-9]{10}$/;  
    if (!nameRegex.test(name)) {
        errorMessage.innerHTML = "Please enter a valid name. Only letters and spaces allowed.";
        return false;
    }

    if (!emailRegex.test(email)) {
        errorMessage.innerHTML = "Please enter a valid email.";
        return false;
    }

    if (!phoneRegex.test(phone)) {
        errorMessage.innerHTML = "Please enter a valid phone number (10 digits).";
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}