const url = "https://api.dictionaryapi.dev/api/v2/entries/en/dog"
const inputBox = document.querySelector('#inputBox input');
const submitBtn = document.querySelector('#submitBtn');
const resultBox = document.querySelector('#resultBox');

async function getData(info) {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${info}`);
    const data = await response.json();
    console.log(data)
    return (data[0].meanings[0].definitions[0].definition);
}


submitBtn.addEventListener('click', async function () {
    if (inputBox.value === '') {
        resultBox.innerHTML = '<h1> Please Enter 1st</h1>'
    }
    else {
        let userResponce = inputBox.value;
        console.log(userResponce)
        let serverResponse = await getData(userResponce);
        console.log(serverResponse);
        resultBox.innerHTML = `<h1>${serverResponse}</h1>`;
    }
})