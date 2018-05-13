close_btn.addEventListener('click', function() {
  if (confirm('Закрыть программу?')) {
    wrap.style.display = 'none';
    close_btn.style.display = 'none';
    open_btn.parentNode.style.display = 'block';
  }
});

open_btn.addEventListener('click', function() {
  wrap.style.display = 'flex';
  close_btn.style.display = 'block';
  open_btn.parentNode.style.display = 'none';
});

info_btn.addEventListener('click', function() {
  alert(
    'Процедуры методики валидации одностраничных WEB-приложений. \nВыпускная квалификационная работа. \nРазработано Напалковой Алёной.'
  );
});

//Получаем переменные 1ой характеристики и высчитываем ПК, КПК
let f1 = document.querySelector('.f1');
let g1 = document.querySelector('.g1');
let pk1 = document.querySelector('.pk1');
let kpk1 = document.querySelector('.kpk1');
let b1 = document.querySelector('.b1');

f1.addEventListener('keyup', function() {
  pk1.textContent = f1.value.replace(/\,/g, '.') / 1;
});

kpk1.parentNode.parentNode.addEventListener('keyup', function() {
  kpk1.textContent = parseFloat(
    (pk1.textContent * g1.value.replace(/\,/g, '.')).toFixed(3)
  );
  legend1.textContent = kpk1.textContent;
});

//Получаем переменные 2ой характеристики и высчитываем ПК, КПК
let f2 = document.querySelector('.f2');
let g2 = document.querySelector('.g2');
let pk2 = document.querySelector('.pk2');
let kpk2 = document.querySelector('.kpk2');
let b2 = document.querySelector('.b2');

f2.addEventListener('keyup', function() {
  pk2.textContent = f2.value.replace(/\,/g, '.') / 1;
});

kpk2.parentNode.parentNode.addEventListener('keyup', function() {
  kpk2.textContent = parseFloat(
    (pk2.textContent * g2.value.replace(/\,/g, '.')).toFixed(3)
  );
  legend2.textContent = kpk2.textContent;
});

//Получаем переменные 3ой характеристики и высчитываем ПК, КПК
let f31 = document.querySelector('.f31');
let g31 = document.querySelector('.g31');
let pk31 = document.querySelector('.pk31');
let b3 = document.querySelector('.b3');

f31.addEventListener('keyup', function() {
  pk31.textContent = f31.value.replace(/\,/g, '.') / 1;
});

let f32 = document.querySelector('.f32');
let g32 = document.querySelector('.g32');
let pk32 = document.querySelector('.pk32');

f32.addEventListener('keyup', function() {
  pk32.textContent = f32.value.replace(/\,/g, '.') / 1;
});

let f33 = document.querySelector('.f33');
let g33 = document.querySelector('.g33');
let pk33 = document.querySelector('.pk33');

f33.addEventListener('keyup', function() {
  pk33.textContent = f33.value.replace(/\,/g, '.') / 1;
});

let f34 = document.querySelector('.f34');
let g34 = document.querySelector('.g34');
let pk34 = document.querySelector('.pk34');
let kpk3 = document.querySelector('.kpk3');

f34.addEventListener('keyup', function() {
  pk34.textContent = f34.value.replace(/\,/g, '.').replace(/\,/g, '.') / 1;
});

kpk3.parentNode.parentNode.addEventListener('keyup', function() {
  kpk3.textContent = parseFloat(
    (
      pk31.textContent * g31.value.replace(/\,/g, '.') +
      pk32.textContent * g32.value.replace(/\,/g, '.') +
      pk33.textContent * g33.value.replace(/\,/g, '.') +
      pk34.textContent * g34.value.replace(/\,/g, '.')
    ).toFixed(3)
  );

  legend3.textContent = kpk3.textContent;
});

//Получаем переменные 4ой характеристики и высчитываем ПК, КПК
let f41 = document.querySelector('.f41');
let f42 = document.querySelector('.f42');
let f43 = document.querySelector('.f43');
let g4 = document.querySelector('.g4');
let pk4 = document.querySelector('.pk4');
let kpk4 = document.querySelector('.kpk4');
let b4 = document.querySelector('.b4');

f41.addEventListener('keyup', function() {
  pk4.textContent =
    (parseFloat(f41.value.replace(/\,/g, '.')) +
      parseFloat(f42.value.replace(/\,/g, '.')) +
      parseFloat(f43.value.replace(/\,/g, '.'))) /
    3;
});
f42.addEventListener('keyup', function() {
  pk4.textContent =
    (parseFloat(f41.value.replace(/\,/g, '.')) +
      parseFloat(f42.value.replace(/\,/g, '.')) +
      parseFloat(f43.value.replace(/\,/g, '.'))) /
    3;
});
f43.addEventListener('keyup', function() {
  pk4.textContent =
    (parseFloat(f41.value.replace(/\,/g, '.')) +
      parseFloat(f42.value.replace(/\,/g, '.')) +
      parseFloat(f43.value.replace(/\,/g, '.'))) /
    3;
});

kpk4.parentNode.parentNode.addEventListener('keyup', function() {
  kpk4.textContent = parseFloat(
    (pk4.textContent * g4.value.replace(/\,/g, '.')).toFixed(3)
  );
  legend4.textContent = kpk4.textContent;
});

//Получаем переменные 5ой характеристики и высчитываем ПК, КПК
let f51 = document.querySelector('.f51');
let g51 = document.querySelector('.g51');
let pk51 = document.querySelector('.pk51');
let kpk5 = document.querySelector('.kpk5');
let b5 = document.querySelector('.b5');

f51.addEventListener('keyup', function() {
  pk51.textContent = f51.value.replace(/\,/g, '.') / 1;
});

let f52 = document.querySelector('.f52');
let g52 = document.querySelector('.g52');
let pk52 = document.querySelector('.pk52');

f52.addEventListener('keyup', function() {
  pk52.textContent = f52.value.replace(/\,/g, '.') / 1;
});

kpk5.parentNode.parentNode.addEventListener('keyup', function() {
  kpk5.textContent = parseFloat(
    (
      pk51.textContent * g51.value.replace(/\,/g, '.') +
      pk52.textContent * g52.value.replace(/\,/g, '.')
    ).toFixed(3)
  );

  legend5.textContent = kpk5.textContent;
});

//Считаем ИПК
let ipk = document.querySelector('.ipk');

features.addEventListener('keyup', function() {
  ipk.textContent = (
    kpk1.textContent * b1.value.replace(/\,/g, '.') +
    kpk2.textContent * b2.value.replace(/\,/g, '.') +
    kpk3.textContent * b3.value.replace(/\,/g, '.') +
    kpk4.textContent * b4.value.replace(/\,/g, '.') +
    kpk5.textContent * b5.value.replace(/\,/g, '.')
  ).toFixed(3);
});

//Строим график
features.addEventListener('keyup', function() {
  chart1.style.height = kpk1.textContent * 160 + 'px';
  chart2.style.height = kpk2.textContent * 160 + 'px';
  chart3.style.height = kpk3.textContent * 160 + 'px';
  chart4.style.height = kpk4.textContent * 160 + 'px';
  chart5.style.height = kpk5.textContent * 160 + 'px';
});
