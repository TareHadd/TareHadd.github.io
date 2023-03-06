let menu = [
    {
        id: 1,
        name: 'Bečka šnicla',
        price: 10.00,
        image: 'https://storage.radiosarajevo.ba/article/392967/871x540/becka_snicla_prtscr.jpg?v1602585061',
        description: 'Pohovani pileci odrezak uz pomfrit kao prilog'
    },
    {
        id: 1,
        name: 'Mali Ćevapi',
        price: 4.50,
        image: 'https://static.hayat.ba/2021/10/cevapi.jpg',
        description: '5 ćevapa uz: <br>kajmak<br>luk'
    },
    {
        id: 1,
        name: 'Veliki Ćevapi',
        price: 7.00,
        image: ''
    },
    {
        id: 1,
        name: 'Veliki Pileći file',
        price: 7.00,
        image: ''
    },
    {
        id: 1,
        name: 'Mali Pileći file',
        price: 4.50,
        image: ''
    },
    {
        id: 1,
        name: 'Lignje',
        price: 10.00,
        image: ''
    },
    {
        id: 1,
        name: 'Pohovane Lignje',
        price: 10.00,
        image: ''
    },
    {
        id: 1,
        name: 'Piletina u bešamel sosu',
        price: 10.00,
        image: ''
    },
    {
        id: 1,
        name: 'Veliki Pileći file',
        price: 7.00,
        image: ''
    },
    {
        id: 1,
        name: 'Mali Pileći file',
        price: 4.50,
        image: ''
    },
    {
        id: 1,
        name: 'Lignje',
        price: 10.00,
        image: ''
    },
    {
        id: 1,
        name: 'Pohovane Lignje',
        price: 10.00,
        image: ''
    },
    {
        id: 1,
        name: 'Piletina u bešamel sosu',
        price: 10.00,
        image: ''
    },
    {
        id: 1,
        name: 'Veliki Pileći file',
        price: 7.00,
        image: ''
    },
    {
        id: 1,
        name: 'Mali Pileći file',
        price: 4.50,
        image: ''
    },
    {
        id: 1,
        name: 'Lignje',
        price: 10.00,
        image: ''
    },
    {
        id: 1,
        name: 'Pohovane Lignje',
        price: 10.00,
        image: ''
    },
    {
        id: 1,
        name: 'Piletina u bešamel sosu',
        price: 10.00,
        image: ''
    },
    {
        id: 1,
        name: 'Pohovane Lignje',
        price: 10.00,
        image: ''
    },
    {
        id: 1,
        name: 'Piletina u bešamel sosu',
        price: 10.00,
        image: ''
    },
    
]

let savedList = [];


let itemsContainer = document.getElementById('menu-col');
let listContainer = document.getElementById('accordion');
let mainCol = document.getElementById('main-col');
let arrowUp = document.getElementById('arrow-up');
let arrowDown = document.getElementById('arrow-down');

//data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"
//id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion"

for (let item in menu) {
    let listItem = document.createElement("li");
    let attribute = item;

    listItem.setAttribute("data-target", '#'+attribute);
    listItem.setAttribute("data-toggle", "collapse");
    listItem.setAttribute("aria-controls", attribute);
    listItem.setAttribute("aria-expanded", true);
    listItem.classList.add('list-group-item', 'separate-items', 'px-1', 'py-2', 'py-lg-1');

    let span1 = document.createElement("span");
    let span2 = document.createElement("span");
    let span3 = document.createElement("span");
    let addSpan = document.createElement("span");

    let iconsDiv = document.createElement("div");
    let priceInfoDiv = document.createElement("div");

    let collapse = document.createElement("div");
    collapse.setAttribute("id", attribute);
    collapse.setAttribute("data-parent", "#accordion");
    collapse.setAttribute("class", "collapse bg-light");

    let collapseContent  = document.createElement("div");
    collapseContent.classList.add('card-body', 'pt-0')
    collapseContent.innerHTML = menu[item].description

    let imageElement = document.createElement("img");
    imageElement.classList.add('decription-image', 'py-2');
    imageElement.setAttribute('src', menu[item].image)


    span1.innerHTML = menu[item].name;
    span2.style.fontStyle='italic';

    if(menu[item].price % 1 === 0 ) {
        span2.innerHTML = menu[item].price + '.00 KM';
    }else {
        span2.innerHTML = menu[item].price + '0 KM';
    }

    span3.innerHTML = `<i class="fa fa-light fa-info-circle meal-details mb-2"></i>`
    addSpan.innerHTML = `<i class="fa fa-plus fa-info-circle meal-details mb-2"></i>`

    span3.classList.add('mr-5')
    iconsDiv.classList.add('ml-5')
    priceInfoDiv.classList.add('mr-3', 'd-flex');
    // span2.classList.add('mr-3');

    // iconsDiv.appendChild(span3);
    collapse.appendChild(imageElement);
    collapse.appendChild(collapseContent);
    
    iconsDiv.appendChild(addSpan);

    priceInfoDiv.appendChild(span2);
    priceInfoDiv.appendChild(iconsDiv);
    
    listItem.appendChild(span1);
    listItem.appendChild(priceInfoDiv);

    listContainer.appendChild(listItem);
    listContainer.appendChild(collapse)
    
    itemsContainer.appendChild(listContainer);

    addSpan.addEventListener("click", () => {
        savedList.push(menu[item]);
        console.log(savedList);
    });

    // listItem.addEventListener("click", () => {
    //     console.log('ee');
    //     if(collapse.classList.contains('show')){
    //         collapse.classList.remove('show');
    //     }else {
    //         collapse.classList.add('show');
    //     }
    // });
}

let lastScrollTop = 0;
mainCol.onscroll = ()=>{
    if(mainCol.scrollTop === 0) {
        arrowDown.classList.remove('d-none');
        arrowUp.classList.add('d-none');
    }

    // lastScrollTop = mainCol.scrollTop <= 0 ? 0 : mainCol.scrollTop;

    if (mainCol.scrollTop + mainCol.offsetHeight>= mainCol.scrollHeight ){
        console.log("End");
        arrowDown.classList.add('d-none');
        arrowUp.classList.remove('d-none')
    }
}

function addToSaveList(item) {
    savedList.push(item);
}