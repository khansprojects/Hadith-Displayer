function custome_data() {
    const narrator = document.getElementById("narrator");
    const hadith = document.getElementById("hadith");
    const refno = document.getElementById("refno");

    let hadith_request = document.getElementById("hadith_no").value;
    let book_request = document.getElementById("book_name").value;
    const api_url = "https://random-hadith-generator.vercel.app/";
    const new_api = api_url + book_request + '/' + hadith_request;

    async function gethadith(url) {
        const response = await fetch(url);
        var data = await response.json();
        console.log(data);
        narrator.innerHTML = data.data.header;
        hadith.innerHTML = data.data.hadith_english;
        refno.innerHTML = data.data.refno;
    }
    gethadith(new_api);
}
custome_data();

function speaking() {
    const utterance = new SpeechSynthesisUtterance(refno.innerHTML + "is\n" + narrator.innerHTML + "\n" + hadith.innerHTML);
    speechSynthesis.speak(utterance);
}
speaking();

function copying() {
    navigator.clipboard.writeText(hadith.innerHTML);
}
copying();


let start = document.querySelector("#custome_search");
let seen = document.querySelector(".custome");
function show() {
    if (seen.style.visibility != "visible") {
        seen.style.visibility = "visible";
    }
    else {
        seen.style.visibility = "hidden";
        document.getElementById("hadith_no").value = "";
    }
}