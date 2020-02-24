document.querySelector('.play').onclick = function () {
  //прячем кнопку
  document.querySelector('.play').hidden = true;
  
  var test = document.querySelector('.video'); 
  // test.onclick = function() {alert('test'); return false;}     
  (eval(test.onclick));
}


