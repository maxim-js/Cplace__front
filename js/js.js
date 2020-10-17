// Добавление собственного места

var add = document.getElementById("add-place");
let inputAddPlace = document.getElementById("inputAddPlace");
function insertCode() {
    if (inputAddPlace.value == "") {
        alert('Введите свое место')
    } else {
        var htmlCode = "<div class='alert alert-info'>" + document.insCode.strCode.value + "</div>";
        add.insertAdjacentHTML("afterEnd", htmlCode);
        inputAddPlace.value = "";


    }
}


// Генерирование рандома

let placeCatalog = [
    "Памятник Александру Ⅲ",
    "Остров Юность",
    "Бульвар Постышева",
    "Московские триумфальные ворота",
    "Спорт-парк Поляна",
    "Ледокол Ангара",
    "Сквер им. Кирова",
    "Стадион труд",
    "Пляж Якоби",
    "Памятник Ленину (ул. Ленина)"
]

let place = [

];
let time = [
    "00:00", //0
    "00:30", //1
    "01:00", //2
    "01:30", //3
    "02:00", //4
    "02:30", //5
    "03:00", //6
    "03:30", //7 
    "04:00", //8
    "04:30", //9
    "05:00", //10
    "05:30", //11
    "06:00", //12
    "06:30", //13
    "07:00", //14
    "07:30", //15
    "08:00", //16
    "08:30", //17
    "09:00", //18
    "09:30", //19
    "10:00", //20
    "10:30", //21
    "11:00", //22
    "11:30", //23
    "12:00", //24
    "12:30", //25
    "13:00", //26
    "13:30", //27
    "14:00", //28
    "14:30", //29
    "15:00", //30
    "15:30", //31
    "16:00", //32
    "16:30", //33
    "17:00", //34
    "17:30", //35
    "18:00", //36
    "18:30", //37
    "19:00", //38
    "19:30", //39
    "20:00", //40
    "20:30", //41
    "21:00", //42
    "21:30", //43
    "22:00", //44
    "22:30", //45
    "23:00", //46
    "23:30", //47
    "24:00" //48
];

var timeList = document.getElementById("time"),
    placeList = document.getElementById("place"),
    btn = document.getElementById("btn"),
    checkbox = document.getElementById('checkbox');

let addPlace = document.getElementsByClassName('alert-info');


/* --------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------
ГЛАВНАЯ КНОПКА В ПРИЛОЖЕНИЕ
-----------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------- */

btn.addEventListener("click", function () {

    // РАБОТА checkbox
    if (checkbox.checked) {
        place.push(...placeCatalog);
    } else {
        place.length = 0;
    }

    if (place == "") {
        alert('Не из чего выбирать, Братан');
        return false;
    }
    // РАБОТА select
    var selectFrom = document.getElementById("select-from"),
        selectTo = document.getElementById("select-to");
    var valueFrom = selectFrom.value;
    var valueTo = selectTo.value;
    var timeArr = time.slice(valueFrom, valueTo);

    // ДОБАВЛЕНИЕ СОБСТВЕННОГО МЕСТА
    var places_as_arr = Array.from(addPlace);

    places_as_arr.forEach(function (place_item, i, places_as_arr) {
        place.push(place_item.innerHTML);
    });

    // ГЕНЕРАЦИЯ РАНДОМА
    let rndTime = Math.floor(Math.random() * (timeArr.length - 0) + 0);
    let rndPlace = Math.floor(Math.random() * (place.length - 0) + 0);
    timeList.textContent = timeArr[rndTime];
    placeList.textContent = place[rndPlace];
    btn.textContent = "Еще разок?";
});
