const submit = () => {
    let apiLink = '';

    const params = {
        email: document.querySelector('#loginEmail').value,
        password: document.querySelector('#loginPassword').value
    }

    const http = new XMLHttpRequest()
    http.open('POST', apiLink)
    http.setRequestHeader('Content-type', 'application/json')
    http.send(JSON.stringify(params));
    http.onload = function() {
        alert(http.responseText);
    }
}

$('#options a').on('click', function (e) {
    e.preventDefault();
    $(this).tab('show');
});