let name = 'Yuval';
let age = '14';
let likesSushi = true

function saveName() {

    let newName = document.getElementById("greeter").value // text fild value from the user
    document.getElementById('username').textContent = newName;
    document.getElementById("greeter").value = "";
}

document.querySelectorAll('.accordion-header').forEach(function (button) {
    button.addEventListener('click', function () {
        let content = this.nextElementSibling;
        content.style.display = (content.style.display === 'block') ? 'none' : 'block';
    });
});
const PASSWORD = "UV'sSummerBlog";
function validatePass() {
    const login = document.getElementById('password');
    const msg = document.getElementById('message');
    const hiddenEntries = document.querySelectorAll('.hidden');
    
    if (login.value === PASSWORD) {
        hiddenEntries.forEach(entry => { entry.style.display = 'flex'; });
        msg.textContent = 'Password confirmed. See hidden entries below.'
    } else {
        hiddenEntries.forEach(entry => { entry.style.display = 'none'; });
        msg.textContent = 'Password denied. Try again.'
    }

    login.value = '';
}


