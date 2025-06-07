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
        content.style.display = (content.style.display === 'block') ? 'none': 'block';
    });
});


