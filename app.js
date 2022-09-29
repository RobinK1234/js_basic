/**
 * documentation
 * comment
 */

/*
console.log("1")
console.log("2")
console.log("3")*/
/*1.1
console.log("Hello World");
*/

/*
1.2
let aasta = "2021. ";
let president = "Alar Karis";
let lause_keskosa = "aastal valiti presidendiks ";
let lause = (aasta + lause_keskosa + president);
console.log(lause);
*/

/*1.3
let x = prompt("Sisesta väärtus",0 );
let y = prompt("Sisesta aste",0);
console.log(Math.pow(x,y));
*/

/*
alternatiiv 1.3

const power = (number,n) => {
    if(n === 0)
       return 1
    let result = 1
    while(n !=0){
        n--
        result *= number
    }
    return result

console.log(power(x,y))
*/



/*
1.4

const nimi = prompt("Sisestage oma nimi");
let lubatud = prompt("Sisestage lubatud kiirus", 0);
let tegelik = prompt("Sisestage tegelik kiirus",0);
console.log(nimi + ",","kiiruse ületamise eest on teie trahv", (tegelik - lubatud)*3, "\u20AC");
*/

/*
1.5
let eap = prompt("Sisestage ainepunktide arv");
let nadal = prompt("Sisestage nädalate arv");
let ajakulu = (eap * 26 / nadal);
console.log("Nädala eeldatav ajakulu on", Math.round(ajakulu,0),"h");
*/

/*1.6
let inimesteArv = prompt("Sisestage inimeste arv",0)
let bussiKohad = 50
let bussideArv = Math.floor(inimesteArv/bussiKohad)
let inimesteJaak = inimesteArv % bussiKohad

console.log("Bussis on", bussiKohad, "kohta, inimesi mahtus bussidesse ", bussideArv * bussiKohad,"seega teile tuleb järgi ",
    bussideArv, "bussi ning maha jääb", inimesteJaak, "inimest.")
if(inimesteJaak == 0){
console.log("Bussis on", bussiKohad, "kohta, inimesi mahtus bussidesse ", bussideArv * bussiKohad,"seega teile tuleb järgi ",
    bussideArv, "bussi")
    }
*/



/*
let temp = Number(prompt("Sisestage õhutemperatuur"))
let jah = "Ei ole jäätumise ohtu"
let ei = "On jäätumise oht"
function oht(){
    if(temp > 4){
        console.log(jah)
    }else if (temp <= 4){
        console.log(ei)
    }
}
console.log(oht())
*/

/*
tervisetreening 50-70% maksimaalsest pulsisagedusest,

põhivastupidavuse treening 70-80% maksimaalsest pulsisagedusest,

intensiivne aeroobne treening 80-87% maksimaalsest pulsisagedusest.

Koostada programm, mis küsib kasutajalt

vanuse (täisarvuna aastates),

soo (kasutaja sisestab M, m, N või n),

treeningu tüübi (1 - tervisetreening, 2 - põhivastupidavuse treening, 3 - intensiivne aeroobne treening)

ja lõpuks väljastab pulsisageduse vahemiku vastavatel tingimustel formaadis <vähim pulss> kuni <suurim pulss>, kus vastuses olevad arvud on ümardatud täisarvudeks.
 */
/*
let vanus =Number(prompt("Sisestage oma vanus (täisarvuna aastates)"))
let sugu =prompt("Sisestage oma sugu (mees - m või naine - n)")
let tuup =Number(prompt("Sisestage treeningu tüüp (1 - tervisetreening, 2 - põhivastupidavuse treening, 3 - intensiivne aeroobne treening)"))
let pulsisagedus;

if(sugu == "m" || sugu == "M") {
    pulsisagedus = 220 - vanus
} else if(sugu == "n" || sugu == "N") {
    pulsisagedus = 206 * 0.88 - vanus
}
let min;
let max;

if(tuup == 1) {
    min = 0.5 * pulsisagedus
    max = 0.7 * pulsisagedus
} else if(tuup == 2) {
    min = 0.7 * pulsisagedus
    max = 0.8 * pulsisagedus
} else if (tuup == 3){
    min = 0.8 * pulsisagedus
    max = 0.87 * pulsisagedus
}

console.log(`Pulsisagedus peab olema vahemikus ${Math.round(min)} kuni ${Math.round(max)}`)
*/
/*
let valik = prompt(`Kas soovid istekoha ise valida (ise) või loosiga (loos)`)

let kohaValik;
if(valik == `ise`){
    let kohaValik = prompt(`Kas soovite istuda akna ääres (aken) või muu (muu)`)
    if(kohaValik == `aken`){
        koht = `Aknakoht`
    }else if(kohaValik == `muu`){
        koht = `Vahekäigukoht`
    }
} else if( valik == `loos`) {
    console.log(`Istekoht loositi`)
 let juhuarv = Math.ceil(Math.random() * 3)
    if(juhuarv == 1) {
        koht = `Aknakoht`
    } else {
        koht = `Vahekäigukoht`
    }
}
console.log(koht)
*/
/*küsitakse kirja suurust megabaitides (kasutaja sisestab ujukomaarvu),

küsitakse kirja teema pealkirja (kasutaja sisestab teema pealkirja või kasutaja sisestus on tühi),

küsitakse, kas kirjaga on kaasas fail (kasutaja sisestab jah või ei),

väljastatakse ekraanile Kiri on spämm, kui kiri filtreeritakse välja, vastasel juhul väljastatakse Kiri ei ole spämm.

Proovige kirjutada programm, kasutades ainult ühte tingimuslauset. Kui see ei õnnestu, siis võib ka mitmega.

NB! Kasutaja käest peab kindlasti küsima kolm korda.

Näited programmi tööst:
*/
/* TSÜKKEL?!
for (let nimi = algvaartus; nimi < loppvaartus, number++(?)){
    tegevused, mis sooritatakse korduvalt}

for (let number = 1; number <= 10; number++){
    if(number == 5){
    //console.log(number)
    //break;
    continue;
    }
    console.log(number)
}
let kord = 1
while(kord <= 10){
    console.log(kord)
    kord++
}
*/
/*
let kordus = Number(prompt("Sisestage mitu korda äratada"))
let kord = 1
while(kord <= kordus){
    console.log(`ÄRKA ÜLES - ${kord}. kord`)
    kord++
}
*/
/*
let ringid = Number(prompt(`Sisesta ringide arv`))
let porksKokku = 0
let ring = 1
while(ring <= ringid){
    console.log(`${ring}.ring`)
    if(ring % 2 == 0){
        console.log(`Saab ${ring} porgandit`)
        porksKokku = porksKokku + ring
        console.log(porksKokku)
    }
    ring++
}
console.log(`Porgandite koguarv on ${porksKokku}`)
 */
/*
let taringuteArv = Number(prompt("Sisesta tärnigute arv"))
for (let kord = 1; kord <= taringuteArv; kord++){
    let taring = Math.ceil(Math.random() * 6)
    console.log(taring)
}
*/
/*
let poialpoisid = Number(prompt("Mitu pöialpoissi tahab õuna"))
let poialpoiss = 1
let lumivalgekeseOunad = 14
while(poialpoiss <= poialpoisid){
    let ounad = Math.ceil(Math.random() * 2)
    poialpoiss++
    console.log(ounad)
    lumivalgekeseOunad = lumivalgekeseOunad - ounad
}
console.log(`lumivalgekesele jäi ${lumivalgekeseOunad} Õuna`)
*/












