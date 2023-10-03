  // Function to generate a strong random password
  function generateStrongPassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
    }
    return password;
}

$(document).ready(function() {
    // Initialize password length input and output elements
    const $passwordLengthInput = $('#passwordLength');
    const $passwordOutput = $('#passwordOutput');
    const generatedPasswords = new Set();

    // Generate and display a strong random password when the button is clicked
    $('#generatePassword').click(function() {
        const passwordLength = parseInt($passwordLengthInput.val());
        let password = generateStrongPassword(passwordLength);

        // Ensure the generated password is unique
        while (generatedPasswords.has(password)) {
            password = generateStrongPassword(passwordLength);
        }

        // Add the generated password to the set of generated passwords
        generatedPasswords.add(password);

        $passwordOutput.val(password);
    });
});