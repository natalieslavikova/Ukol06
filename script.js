/* Mějme tři cateringové společnosti dodávající občerstvení na různé akce. Jsou to

Just Food: Dodává levné jídlo vyrobené z nepříliš kvalitních surovin.

Your Mama: Dodává středně drahé jídlo vyrobené z lepších surovin.

Flavour Haven: Dodává drahé jídlo z kvalitních surovin.

Napište pro každou z těcho společností funkci s jedním parametrem, který udává, pro kolik lidí se catering objednává.
 Funkce pak vrátí řetězec obsahující zprávu o tom že catering byl dodán a za jakou cenu. Například

Catering od Flavour Haven pro 100 lidí za 300000 Kč

Vyzkoušjte si vaše funkce v konzoli. 

Poté napište funkci createEvent, která představuje vytvoření nějaké události s cateringem. 
Funkce na vstupu obdrží název události, počet lidí a funkci, pomocí které se má provést catering.
 Funkce createEvent pak vrátí zprávu ve smyslu

Událost Inaugurace prezidenta s catering od Flavour Haven pro 100 lidí za 300000 Kč */

const justFood = (people) => {
    return `Catering od Just Food je pro ${people} lidí za 200 000 Kč`;
}

const yourMama = (people) => {
    return `Catering od Your Mama je pro ${people} lidí za 180 000 Kč`;
}

const flavourHaven = (people) => {
    return `Catering od Flavour Haven je pro ${people} lidí za 220 000 Kč`;
}

console.log(justFood(200));
console.log(yourMama(120));
console.log(flavourHaven(70));



const createEvent = (event, people, cateringFunction) => {
    return `Událost ${event} s ${cateringFunction(people)}`; // pro funckci cateringFunction jsem napsala argument 
}

console.log(createEvent("Inaugurace prezidenta", 70, flavourHaven));
