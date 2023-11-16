function RegistrasiUser() {
    // Fetch values from the form
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var password = document.getElementById("passwordsignup").value;
    var email = document.getElementById("emailsignup").value;
    var phoneString = document.getElementById("phonesignup").value;
    var phone = parseInt(phoneString, 10);
    var userType = document.getElementById("usertypesignup").value;

    // Create an object with the form data
    var formData = {
        First_name: firstName,
        Last_name: lastName,
        Password: password,
        Email: email,
        Phone: phone,
        User_type: userType
    };

    // Log the form data to the console (you can replace this with your API call)
    console.log(formData);

    // You can add an AJAX request here to send the form data to your server
    // Example using fetch:
    fetch('http://localhost:8080/user/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}
