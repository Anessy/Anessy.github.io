

function showFun() {
    if(document.getElementById('myShowBlock' ).style.display == 'none') {
        document.getElementById('myShowBlock' ).style.display = 'block';
    } else {
        document.getElementById('myShowBlock' ).style.display = 'none';
    }
}

function showFun2() {
  if(document.getElementById('myShowBlock2' ).style.display == 'none') {
      document.getElementById('myShowBlock2' ).style.display = 'block';
  } else {
      document.getElementById('myShowBlock2' ).style.display = 'none';
  }
}

function showFun3() {
  if(document.getElementById('myShowBlock3' ).style.display == 'none') {
      document.getElementById('myShowBlock3' ).style.display = 'block';
  } else {
      document.getElementById('myShowBlock3' ).style.display = 'none';
  }
}

function showFun4() {
  if(document.getElementById('myShowBlock4' ).style.display == 'none') {
      document.getElementById('myShowBlock4' ).style.display = 'block';
  } else {
      document.getElementById('myShowBlock4' ).style.display = 'none';
  }
}

function showFun5() {
  if(document.getElementById('myShowBlock5' ).style.display == 'none') {
      document.getElementById('myShowBlock5' ).style.display = 'block';
  } else {
      document.getElementById('myShowBlock5' ).style.display = 'none';
  }
}

// ================= ЧЕКБОКСЫ ==========================

// получили чекбоксы и вывод результата

let one = document.querySelector('#one'),
two = document.querySelector('#two'),
three = document.querySelector('#three'),
result = document.querySelector("#result");

// проверяем, выбраны ли они 

function checkbox() {
 
  result.innerHTML = (one.checked || two.checked || three.checked) ? 
        (" Спасибо за ваш выбор!") : (" Вы не выбрали ни один вариант");
}


// ================= радио баттом =============


let result2 = document.querySelector("#result2");
let butt = document.querySelector('#button');
let radio = document.getElementsByName('r1');

// addEventListener - cлушатель события на кнопке. При событии "click" он запустит function()

butt.addEventListener("click",function(){

  // и выведет в наш результат значение "по умолчанию" - "Вы пока ничего не выбрали"
  result2.innerHTML = ("Вы пока ничего не выбрали");

  // Перебором элементов от 0; пока i меньше количества элементов нашего radio; после каждого прохождения цикла, добавляем к i по 1
  for (let i = 0; i < radio.length; i++ ) {
    // если элемент масива radio с номером i выбран, то
    if (radio[i].checked) {
      // записать в наш результат сообщение с номером выбранного варианта (i+1), потому, что отсчет начинается с 0
      result2.innerHTML = ("Вы выбрали " + [i+1] + " вариант"  );
    }
  }
});

// ===================== выпадающий список =================

// получаем наш выпадающий список
let downList = document.querySelector('#downList'); 

// ставим слушатель события на "уход" мышки с элемента (mouseout)
downList.addEventListener("mouseout", function(){

// при срабатывании ф-ции выводим в наш результат полученный с помощью selectedIndex номер выбранного элемента  
  document.querySelector('#result3').innerHTML = ("Вы выбрали " + downList.selectedIndex + " вариант"  );
});

// ======== input с вариантами от пользователя ===============

// получаем кнопку
let inputLesson4,
    btn4 = document.querySelector('.btn4');

    //поставим слушатель на кнопку - при нажатии, запустим ф-цию
  btn4.addEventListener('click', function(){
    // присвоим переменной inputLesson4 - введенное в input значение
    inputLesson4 = document.querySelector('#inputLesson4').value;
    // все буквы строки inputLesson4 переведем в нижний регистр 
    inputLesson4 = inputLesson4.toLowerCase();
    // split(', ') - разбивает строку на массив по указанному разделителю (в нашем случае это ', ');
    inputLesson4 = inputLesson4.split(',');

    document.querySelector('#result4').innerHTML = '';
    // перебираем эллементы массива 
    for (let i=0; i < inputLesson4.length; i++) {
    //удаляем лишние проболы 
    inputLesson4[i] = inputLesson4[i].trim(); // <= удаляем лишние пробелы <=
    console.log('inputLesson4[i]: ', inputLesson4[i]);
    
    //  document.querySelector('#result4' -- получили наш результат
    // innerHTML -- выводим в html 
    // += -- добавляя к тому, что уже было записано в нем ранее
    document.querySelector('#result4').innerHTML += '<br>' + '  Вы выбрали № ' + (+i+1) + ' = ' + inputLesson4[i] ;
   
  }
  });

  // ========== ASCII ===== unicode =======

  // console.log('\xAE'); 
  // console.log('\u00A9'); 
  // console.log('🦊'); 
  // let str = '='
  // console.log(str.repeat(10));

  // ============= дневной бюджет ================================================== 

  let money;
  document.querySelector('#buttonMoney').addEventListener('click',function(){
    money = +document.querySelector('#inputMoney').value;
    // ========= ========== ========= =========== ========== =========  проверка на число
    document.querySelector('#moneyHtml').innerHTML = correct(money);
    showType(money); 
  }); 

  let inputMainExpensesText, inputMainExpenses; 
  document.querySelector('#buttonExpenses').addEventListener('click',function(){
    inputMainExpensesText = document.querySelector('#inputMainExpensesText').value; 
    inputMainExpenses = +document.querySelector('#inputMainExpenses').value; 
    document.querySelector('#mainExpensesTetx').innerHTML = inputMainExpensesText;
     // ========= ========== ========= =========== ==========  проверка на число
    document.querySelector('#mainExpenses').innerHTML = correct(inputMainExpenses);
    showType(inputMainExpenses); 
  });

  let inputSecondExpensesText, inputSecondExpenses; 
  document.querySelector('#buttonSecondExpenses').addEventListener('click', function(){
    inputSecondExpensesText = document.querySelector('#inputSecondExpensesText').value;
    inputSecondExpenses = +document.querySelector('#inputSecondExpenses').value; 
    document.querySelector('#secondExpensesText').innerHTML = inputSecondExpensesText;
    // ========= ========== ========= =========== ==========  проверка на число
    document.querySelector('#secondExpenses').innerHTML = correct(inputSecondExpenses);
    showType(inputSecondExpenses); 
    budget(); // ===================================== вычисление месячного и дневного бюджета 
  });

  // ф-ция проверки типа данных используем typeOf
  let showType = function(data) {
    console.log('Тип данных ', data,' = ' , typeof(data));
  }

  // проверка на корректность введения числа 
  // (мы получаем NaN. если вводимые данные не являются числом)
  //isNaN проверяет это и в случае правдивости выводит сообщение в результат

let correct = function(a) {
  if (isNaN(a)) {
    return a = 'Ваш ответ не корректен. Введите число.'
  } else {
    return a;
  }
};

let budget = function() {
  // месячный бюджет 
 let budgetMounth = money - (inputMainExpenses + inputSecondExpenses);
 document.querySelector('#budgetMonth').innerHTML = budgetMounth;

 // Дневной бюджет (Math.round - округление до ближайшего целого числа)
 document.querySelector('#budgetDay').innerHTML = Math.round(budgetMounth / 30);
};




  



  
  
  
  








  

  
  
















