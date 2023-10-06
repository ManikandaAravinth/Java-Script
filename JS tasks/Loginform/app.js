
        function validateForm() {
            var name = document.getElementById("name").value;
            var email = document.getElementById("email").value;
            var mobileNumber = document.getElementById("mobileNumber").value;
            var password = document.getElementById("password").value;
            var city = document.getElementById("city").value;
            var pincode = document.getElementById("pincode").value;
            var referralCode = document.getElementById("referralCode").value;
            var acceptCheckbox = document.getElementById("acceptCheckbox").checked;

            var namePattern = /^[A-Za-z\s]{3,}$/;
            var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            var mobileNumberPattern = /^[0-9]{10}$/;
            var passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

            if (!namePattern.test(name)) {
                alert("Invalid name. Name should have at least 3 letters and only contain alphabetic characters.");
                return false;
            }

            if (!emailPattern.test(email)) {
                alert("Invalid email. Please enter a valid email address.");
                return false;
            }

            if (!mobileNumberPattern.test(mobileNumber)) {
                alert("Invalid mobile number. Please enter a 10-digit number.");
                return false;
            }

            if (!passwordPattern.test(password)) {
                alert("Invalid password. Password should have at least 6 characters, including one uppercase letter, one lowercase letter, and one digit.");
                return false;
            }

            if (city === "") {
                alert("Please select a city.");
                return false;
            }

            if (pincode === "") {
                alert("Please enter a pincode.");
                return false;
            }

            if (referralCode !== "" && !referralCode.match(/^[A-Za-z0-9]+$/)) {
                alert("Invalid referral code. Referral code should only contain alphanumeric characters.");
                return false;
            }

            if (!acceptCheckbox) {
                alert("Please accept the terms and conditions.");
                return false;
            }

            var result = "Registration Successful!\n"
                        + "Name: " + name + "\n"
                        + "Email: " + email + "\n"
                        + "Mobile Number: " + mobileNumber + "\n"
                        + "City: " + city + "\n"
                        + "Pincode: " + pincode + "\n"
                        + "Referral Code: " + referralCode;

            alert(result);
            return false; 
        }

        $(".toggle-password").click(function() {

            $(this).toggleClass("fa-eye fa-eye-slash");
            var input = $($(this).attr("toggle"));
            if (input.attr("type") == "password") {
              input.attr("type", "text");
            } else {
              input.attr("type", "password");
            }
          });