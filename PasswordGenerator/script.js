function passwordGenerate() {
    let password = "";
    const length = document.getElementById("LengthOfPassword").value;
    let result = document.getElementById("result");
    const IncludeLowercase = document.getElementById("IncludeLowercase");
    const IncludeUppercase = document.getElementById("IncludeUppercase");
    const IncludeNumbers = document.getElementById("IncludeNumbers");
    const IncludeSymbols = document.getElementById("IncludeSymbols");
    if (length < 8) {
        result.textContent = `Your password length should be atleast 8 characters long`;
    }
    else if (!(IncludeLowercase.checked || IncludeUppercase.checked || IncludeNumbers.checked || IncludeSymbols.checked)) {
        result.textContent = `Select characters to be included in your password`;
    }
    else {
        const lowerCase = "abcdefghijklmnopqrstuvwxyz";
        const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numbers = "0123456789";
        const symbols = "~!@#$%^&*()_+-=><?/|";
        let allowedChars = "";

        allowedChars += IncludeLowercase.checked ? lowerCase : "";
        allowedChars += IncludeUppercase.checked ? upperCase : "";
        allowedChars += IncludeNumbers.checked ? numbers : "";
        allowedChars += IncludeSymbols.checked ? symbols : "";

        for (let i = 0; i < length; i++) {
            password += allowedChars[Math.floor(Math.random() * allowedChars.length)];
        }
        result.textContent = password;
    }
}

// Added event listener for Enter key
document.getElementById("LengthOfPassword").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        passwordGenerate();
    }
});
