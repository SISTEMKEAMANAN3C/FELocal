function LoginUser() {
    // Fetch values from the form
    var password = document.getElementById("passwordsignin").value;
    var email = document.getElementById("emailsignin").value;

    // Create an object with the form data
    var formData = {
        Password: password,
        Email: email
    };

    // Log the form data to the console (you can replace this with your API call)
    console.log(formData);

    // You can add an AJAX request here to send the form data to your server
    // Example using fetch:
    fetch('http://localhost:8080/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // Assuming you want to include the token in the headers
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response directly here
        console.log(data);
        if (data.token) {
            // Assuming you want to do something with the token
            responseData(data);
        }
        if (data.first_name) {
            // Assuming you want to do something with the token
            responseData(data);
        }
        else {
        }
    })
    .catch(error => console.error('Error:', error));
}

function responseData(result) {
    setCookieWithExpireHour("token", result.token, 2);
    setCookieWithExpireHour("name", result.first_name, 2);

    // Redirect based on user_type
    if (result.status === true) {
        switch (result.user_type) {
            case 'DOSEN':
                window.location.href = './dosen/dashboard/'; // Redirect to DOSEN page
                break;
            case 'ADMIN':
                window.location.href = './admin/dashboard/'; // Redirect to ADMIN page
                break;
            case 'MAHASISWA':
                window.location.href = './mahasiswa/dashboard/'; // Redirect to MAHASISWA page
                break;
            default:
                console.error('Invalid user type:', result.user_type);
        }
    } else {
        console.error('User status is not true.');
    }
    
}

function setCookieWithExpireHour(name, value, hours) {
    var d = new Date();
    d.setTime(d.getTime() + hours * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}
