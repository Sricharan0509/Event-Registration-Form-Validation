function validateForm() {
    var name = document.regForm["stud-name"].value;
    var regno = document.regForm["stud-reg"].value;
    var mail = document.regForm["stud-mail"].value;
    var phnumber = document.regForm["stud-no"].value;
    var zipcode = document.regForm["stud-zipcode"].value;
    var password = document.regForm["stud-password"].value;
    var status = true; // Initialize status as true

    // Name Validation
    if (name === "") {
        document.getElementById("nameloc").innerHTML = "!Please enter your name";
        status = false; // Set status to false
    } else {
        document.getElementById("nameloc").innerHTML = ""; // Clear any error message
    }

    // Registration Number Validation
    if (regno === "") {
        document.getElementById("regloc").innerHTML = "!Please enter your registration";
        status = false;
    } else {
        document.getElementById("regloc").innerHTML = "";
    }

    // Mail Validation
    if (mail === "") {
        document.getElementById("mailloc").innerHTML = "!Please enter your mailId";
        status = false;
    } else {
        var vitMailPattern = /^[A-Za-z]+\.[A-Za-z]+\d{4}@vitstudent\.ac\.in$/;
        if (!vitMailPattern.test(mail)) {
            document.getElementById("mailloc").innerHTML = "!Mail is not in VIT format";
            status = false;
        } else {
            document.getElementById("mailloc").innerHTML = "";
        }
    }


    // Phone Number Verification
    if (phnumber === "") {
        document.getElementById("numloc").innerHTML = "!Please enter your phone number";
        status = false;
    } else if (phnumber.length !== 10) {
        document.getElementById("numloc").innerHTML = "!Phone number must be 10 digits";
        status = false;
    } else {
        document.getElementById("numloc").innerHTML = "";
    }

    // Zip Code Verification
    if (zipcode === "") {
        document.getElementById("codeloc").innerHTML = "!Please enter your zip code";
        status = false;
    } else if (zipcode.length !== 5) {
        document.getElementById("codeloc").innerHTML = "!Zip code must be 5 digits";
        status = false;
    } else {
        document.getElementById("codeloc").innerHTML = "";
    }

    // Password Validation
    if (password === "") {
        document.getElementById("passloc").innerHTML = "!Please enter your password";
        status = false;
    }
    else {
        document.getElementById("passloc").innerHTML = "";
        function isStrongPassword(password) {
            // Check if the password length is between 10 and 100 characters
            if (password.length < 10 || password.length > 100) {
                return false;
            }

            // Check if there are at least 5 unique characters
            var uniqueCharacters = new Set(password);
            if (uniqueCharacters.size < 5) {
                return false;
            }

            // Check if there are at least 3 of the following: uppercase, lowercase, numeric, or special characters
            var hasUppercase = /[A-Z]/.test(password);
            var hasLowercase = /[a-z]/.test(password);
            var hasNumeric = /\d/.test(password);
            var hasSpecial = /[~!@#$%^*-_=+\[\]{}\/;:,.?]/.test(password);

            var conditionsMet = hasUppercase + hasLowercase + hasNumeric + hasSpecial;

            return conditionsMet >= 3;
        }

        if (!isStrongPassword(password)) {
            document.getElementById("passloc").innerHTML = "!At least 10 characters (and up to 100 characters).";
            document.getElementById("passloc2").innerHTML = "!5 or more unique characters.";
            document.getElementById("passloc3").innerHTML = "!At least 3 of the following: uppercase, lowercase, numeric, or special characters.";

            status = false;
        } else {
            document.getElementById("passloc").innerHTML = "";
        }

        return status; // Return the overall validation status
    }
}
