        function calculatePay() {
            // Get input values
            const name = document.getElementById("name").value;
            const designation = document.getElementById("designation").value;
            const basicPay = parseFloat(document.getElementById("basicPay").value);

            // Calculate HRA, DA, and PF (assuming percentages)
            const hra = 0.25 * basicPay;
            const da = 0.15 * basicPay;
            const pf = 0.1 * basicPay;

            // Calculate gross pay and net pay
            const grossPay = basicPay + hra + da;
            const netPay = grossPay - pf;

            // Display the results
            document.getElementById("displayedName").textContent = name;
            document.getElementById("displayedDesignation").textContent = designation;
            document.getElementById("displayedBasicPay").textContent = basicPay.toFixed(2);
            document.getElementById("displayedHRA").textContent = hra.toFixed(2);
            document.getElementById("displayedDA").textContent = da.toFixed(2);
            document.getElementById("displayedPF").textContent = pf.toFixed(2);
            document.getElementById("displayedGrossPay").textContent = grossPay.toFixed(2);
            document.getElementById("displayedNetPay").textContent = netPay.toFixed(2);
        }


        
        let buttonClicked = false;

        function checkAge() {
            if (buttonClicked) {
                alert("You've already checked eligibility. Please refresh the page to check again.");
                return;
            }

            const ageInput = document.getElementById("age");
            const age = parseInt(ageInput.value);

            if (age >= 18) {
                alert("Congratulations! You are eligible to vote.");
            } else {
                alert("Sorry, you are not eligible to vote.");
            }

            // Set the flag to prevent further clicks
            buttonClicked = true;
        }
    
