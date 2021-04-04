const books = [
    {
        id: 1,
        title: "Il re ombra",
        author: "Maaza Mengiste",
        summary: "1974, Addis Abeba: «È venuta a piedi e in corriera, attraversando luoghi che per quasi quarant'anni aveva scelto di dimenticare. È in anticipo di due giorni ma lo aspetterà...» Inizia cosí, con la paziente attesa di Hirut nella stazione ferroviaria della capitale etiope sull'orlo di una nuova rivolta, il lungo flashback con cui Maaza Mengiste ci conduce ai giorni dell'occupazione voluta da Mussolini nel 1935 e portata avanti con inaudita violenza malgrado i richiami della Società delle nazioni.",
        img: "https://tamulibri.com/images/source/5516.jpg"
    },
    {
        id: 2,
        title: "Luminosa",
        author: "Gilda Manso",
        summary: "Fausta viene svegliata all'alba da tre squilli del telefono. Riceve una chiamata, una chiamata per lei: è un imprevisto, uno shock, ed è un dono. Davanti alla sua porta c'è qualcosa di completamente inatteso, una sfida e un'opportunità precise: sarai madre, Fausta, qui e ora.",
        img: "https://tamulibri.com/images/source/5501.jpg"
    },
    {
        id: 3,
        title: "Timidi messaggi per ragazze cifrate",
        author: "Ferruccio Mazzanti",
        summary: "Grot ha poco più di vent'anni e non esce dalla sua stanza da 1200 giorni. È un hikikomori e ha un unico modo di comunicare con l'esterno: messaggi d'amore criptati a donne sconosciute. 'Timidi messaggi per ragazze cifrate' è un romanzo a due strati: da un lato la voce straripante e alienata di Grot, dall altro la voce segreta della cifratura.",
        img: "https://tamulibri.com/images/source/5503.jpg"
    },
    {
        id: 4,
        title: "L' unica persona nera nella stanza",
        author: "Nadeesha Uyangoda",
        summary: "La razza è un concetto difficile da cogliere, pur non avendo fondamenti biologici produce grossi effetti nei rapporti sociali, professionali e sentimentali. La razza in Italia non si palesa fino a quando tu non sei l'unica persona nera in una stanza di bianchi. E quell'unica persona è Bellamy, Mike, Blessy, David... una moltitudine in parte sommersa, sotterranea.",
        img: "https://tamulibri.com/images/source/5419.jpg"
    }
]

let img = document.getElementById("book-cover");
let title = document.getElementById("title");
let author = document.getElementById("author");
let summary = document.getElementById("summary");

let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");
let randomBtn = document.getElementById("random-btn");

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function(){
    showBook(currentItem);
})

function showBook(number){
    let item = books[number];
    //console.log(item);
    img.src = item.img;
    title.textContent = item.title;
    author.textContent = item.author;
    summary.textContent = item.summary;
}

nextBtn.addEventListener('click', function(){
    currentItem++;

    if(currentItem > books.length - 1){
        currentItem = 0;
    }

    showBook(currentItem);
})

prevBtn.addEventListener('click', function(){
    currentItem--;

    if(currentItem < 0){
        currentItem = books.length -1;
    }

    showBook(currentItem);
})

randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * books.length);
    showBook(currentItem);
    console.log(currentItem)
})