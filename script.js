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
let f_1_1 = document.querySelector('.f_1_1');
let f_1_1_1 = document.querySelector('.f_1_1_1');
let f_1_1_2 = document.querySelector('.f_1_1_2');
let f_1_1_3 = document.querySelector('.f_1_1_3');
let f_1_1_4 = document.querySelector('.f_1_1_4');
let f_1_1_5 = document.querySelector('.f_1_1_5');
let f_1_1_6 = document.querySelector('.f_1_1_6');
let f_1_1_7 = document.querySelector('.f_1_1_7');
let g_1_1 = document.querySelector('.g_1_1');
let pk_1_1 = document.querySelector('.pk_1_1');

f_1_1.addEventListener('keyup', function() {
  pk_1_1.textContent = (
    (parseInt(f_1_1_1.value) +
      parseInt(f_1_1_2.value) +
      parseInt(f_1_1_3.value) +
      parseInt(f_1_1_4.value) +
      parseInt(f_1_1_5.value) +
      parseInt(f_1_1_6.value) +
      parseInt(f_1_1_7.value)) /
    7
  ).toFixed(3);
});

let f_1_2 = document.querySelector('.f_1_2');
let f_1_2_1 = document.querySelector('.f_1_2_1');
let f_1_2_2 = document.querySelector('.f_1_2_2');
let f_1_2_3 = document.querySelector('.f_1_2_3');
let f_1_2_4 = document.querySelector('.f_1_2_4');
let f_1_2_5 = document.querySelector('.f_1_2_5');
let f_1_2_6 = document.querySelector('.f_1_2_6');
let f_1_2_7 = document.querySelector('.f_1_2_7');
let g_1_2 = document.querySelector('.g_1_2');
let pk_1_2 = document.querySelector('.pk_1_2');

f_1_2.addEventListener('keyup', function() {
  pk_1_2.textContent = (
    (parseInt(f_1_2_1.value) +
      parseInt(f_1_2_2.value) +
      parseInt(f_1_2_3.value) +
      parseInt(f_1_2_4.value) +
      parseInt(f_1_2_5.value) +
      parseInt(f_1_2_6.value) +
      parseInt(f_1_2_7.value)) /
    7
  ).toFixed(3);
});

let f_1_3 = document.querySelector('.f_1_3');
let f_1_3_1 = document.querySelector('.f_1_3_1');
let f_1_3_2 = document.querySelector('.f_1_3_2');
let f_1_3_3 = document.querySelector('.f_1_3_3');
let f_1_3_4 = document.querySelector('.f_1_3_4');
let f_1_3_5 = document.querySelector('.f_1_3_5');
let f_1_3_6 = document.querySelector('.f_1_3_6');
let f_1_3_7 = document.querySelector('.f_1_3_7');
let g_1_3 = document.querySelector('.g_1_3');
let pk_1_3 = document.querySelector('.pk_1_3');

f_1_3.addEventListener('keyup', function() {
  pk_1_3.textContent = (
    (parseInt(f_1_3_1.value) +
      parseInt(f_1_3_2.value) +
      parseInt(f_1_3_3.value) +
      parseInt(f_1_3_4.value) +
      parseInt(f_1_3_5.value) +
      parseInt(f_1_3_6.value) +
      parseInt(f_1_3_7.value)) /
    7
  ).toFixed(3);
});

let b_1 = document.querySelector('.b_1');
let kpk_1 = document.querySelector('.kpk_1');

f_1_1.parentNode.addEventListener('keyup', function() {
  kpk_1.textContent = (
    parseFloat(pk_1_1.textContent) *
      parseFloat(g_1_1.value.replace(/\,/g, '.')) +
    parseFloat(pk_1_2.textContent) *
      parseFloat(g_1_2.value.replace(/\,/g, '.')) +
    parseFloat(pk_1_3.textContent) * parseFloat(g_1_3.value.replace(/\,/g, '.'))
  ).toFixed(3);
  legend1.textContent = kpk_1.textContent;
});

//Получаем переменные 2ой характеристики и высчитываем ПК, КПК
let f_2_1 = document.querySelector('.f_2_1');
let f_2_1_1 = document.querySelector('.f_2_1_1');
let f_2_1_2 = document.querySelector('.f_2_1_2');
let f_2_1_3 = document.querySelector('.f_2_1_3');
let g_2_1 = document.querySelector('.g_2_1');
let pk_2_1 = document.querySelector('.pk_2_1');

f_2_1.addEventListener('keyup', function() {
  pk_2_1.textContent = (
    (parseInt(f_2_1_1.value) +
      parseInt(f_2_1_2.value) +
      parseInt(f_2_1_3.value)) /
    3
  ).toFixed(3);
});

let f_2_2 = document.querySelector('.f_2_2');
let f_2_2_1 = document.querySelector('.f_2_2_1');
let f_2_2_2 = document.querySelector('.f_2_2_2');
let g_2_2 = document.querySelector('.g_2_2');
let pk_2_2 = document.querySelector('.pk_2_2');

f_2_2.addEventListener('keyup', function() {
  pk_2_2.textContent = (
    (parseInt(f_2_2_1.value) + parseInt(f_2_2_2.value)) /
    2
  ).toFixed(3);
});

let b_2 = document.querySelector('.b_2');
let kpk_2 = document.querySelector('.kpk_2');

f_2_1.parentNode.addEventListener('keyup', function() {
  kpk_2.textContent = (
    parseFloat(pk_2_1.textContent) *
      parseFloat(g_2_1.value.replace(/\,/g, '.')) +
    parseFloat(pk_2_2.textContent) * parseFloat(g_2_2.value.replace(/\,/g, '.'))
  ).toFixed(3);
  legend2.textContent = kpk_2.textContent;
});

//Получаем переменные 3ой характеристики и высчитываем ПК, КПК
let f_3_1 = document.querySelector('.f_3_1');
let f_3_1_1 = document.querySelector('.f_3_1_1');
let f_3_1_2 = document.querySelector('.f_3_1_2');
let f_3_1_3 = document.querySelector('.f_3_1_3');
let g_3_1 = document.querySelector('.g_3_1');
let pk_3_1 = document.querySelector('.pk_3_1');

f_3_1.addEventListener('keyup', function() {
  pk_3_1.textContent = (
    (parseInt(f_3_1_1.value) +
      parseInt(f_3_1_2.value) +
      parseInt(f_3_1_3.value)) /
    3
  ).toFixed(3);
});

let f_3_2 = document.querySelector('.f_3_2');
let f_3_2_1 = document.querySelector('.f_3_2_1');
let f_3_2_2 = document.querySelector('.f_3_2_2');
let f_3_2_3 = document.querySelector('.f_3_2_3');
let f_3_2_4 = document.querySelector('.f_3_2_4');
let g_3_2 = document.querySelector('.g_3_2');
let pk_3_2 = document.querySelector('.pk_3_2');

f_3_2.addEventListener('keyup', function() {
  pk_3_2.textContent = (
    (parseInt(f_3_2_1.value) +
      parseInt(f_3_2_2.value) +
      parseInt(f_3_2_3.value) +
      parseInt(f_3_2_4.value)) /
    4
  ).toFixed(3);
});

let f_3_3 = document.querySelector('.f_3_3');
let f_3_3_1 = document.querySelector('.f_3_3_1');
let f_3_3_2 = document.querySelector('.f_3_3_2');
let f_3_3_3 = document.querySelector('.f_3_3_3');
let f_3_3_4 = document.querySelector('.f_3_3_4');
let f_3_3_5 = document.querySelector('.f_3_3_5');
let f_3_3_6 = document.querySelector('.f_3_3_6');
let f_3_3_7 = document.querySelector('.f_3_3_7');
let f_3_3_8 = document.querySelector('.f_3_3_8');
let g_3_3 = document.querySelector('.g_3_3');
let pk_3_3 = document.querySelector('.pk_3_3');

f_3_3.addEventListener('keyup', function() {
  pk_3_3.textContent = (
    (parseInt(f_3_3_1.value) +
      parseInt(f_3_3_2.value) +
      parseInt(f_3_3_3.value) +
      parseInt(f_3_3_4.value) +
      parseInt(f_3_3_5.value) +
      parseInt(f_3_3_6.value) +
      parseInt(f_3_3_7.value) +
      parseInt(f_3_3_8.value)) /
    8
  ).toFixed(3);
});

let f_3_4 = document.querySelector('.f_3_4');
let f_3_4_1 = document.querySelector('.f_3_4_1');
let f_3_4_2 = document.querySelector('.f_3_4_2');
let f_3_4_3 = document.querySelector('.f_3_4_3');
let g_3_4 = document.querySelector('.g_3_4');
let pk_3_4 = document.querySelector('.pk_3_4');

f_3_4.addEventListener('keyup', function() {
  pk_3_4.textContent = (
    (parseInt(f_3_4_1.value) +
      parseInt(f_3_4_2.value) +
      parseInt(f_3_4_3.value)) /
    3
  ).toFixed(3);
});

let b_3 = document.querySelector('.b_3');
let kpk_3 = document.querySelector('.kpk_3');

f_3_1.parentNode.addEventListener('keyup', function() {
  kpk_3.textContent = (
    parseFloat(pk_3_1.textContent) *
      parseFloat(g_3_1.value.replace(/\,/g, '.')) +
    parseFloat(pk_3_2.textContent) *
      parseFloat(g_3_2.value.replace(/\,/g, '.')) +
    parseFloat(pk_3_3.textContent) *
      parseFloat(g_3_3.value.replace(/\,/g, '.')) +
    parseFloat(pk_3_4.textContent) * parseFloat(g_3_4.value.replace(/\,/g, '.'))
  ).toFixed(3);
  legend3.textContent = kpk_3.textContent;
});

//Получаем переменные 4ой характеристики и высчитываем ПК, КПК
let f_4_1 = document.querySelector('.f_4_1');
let f_4_1_1 = document.querySelector('.f_4_1_1');
let f_4_1_2 = document.querySelector('.f_4_1_2');
let f_4_1_3 = document.querySelector('.f_4_1_3');
let g_4_1 = document.querySelector('.g_4_1');
let pk_4_1 = document.querySelector('.pk_4_1');

f_4_1.addEventListener('keyup', function() {
  pk_4_1.textContent = (
    (parseInt(f_4_1_1.value) +
      parseInt(f_4_1_2.value) +
      parseInt(f_4_1_3.value)) /
    3
  ).toFixed(3);
});

let f_4_2 = document.querySelector('.f_4_2');
let f_4_2_1 = document.querySelector('.f_4_2_1');
let f_4_2_2 = document.querySelector('.f_4_2_2');
let f_4_2_3 = document.querySelector('.f_4_2_3');
let g_4_2 = document.querySelector('.g_4_2');
let pk_4_2 = document.querySelector('.pk_4_2');

f_4_2.addEventListener('keyup', function() {
  pk_4_2.textContent = (
    (parseInt(f_4_2_1.value) +
      parseInt(f_4_2_2.value) +
      parseInt(f_4_2_3.value)) /
    3
  ).toFixed(3);
});

let f_4_3 = document.querySelector('.f_4_3');
let f_4_3_1 = document.querySelector('.f_4_3_1');
let f_4_3_2 = document.querySelector('.f_4_3_2');
let g_4_3 = document.querySelector('.g_4_3');
let pk_4_3 = document.querySelector('.pk_4_3');

f_4_3.addEventListener('keyup', function() {
  pk_4_3.textContent = (
    (parseInt(f_4_3_1.value) + parseInt(f_4_3_2.value)) /
    2
  ).toFixed(3);
});

let f_4_4 = document.querySelector('.f_4_4');
let f_4_4_1 = document.querySelector('.f_4_4_1');
let f_4_4_2 = document.querySelector('.f_4_4_2');
let f_4_4_3 = document.querySelector('.f_4_4_3');
let g_4_4 = document.querySelector('.g_4_4');
let pk_4_4 = document.querySelector('.pk_4_4');

f_4_4.addEventListener('keyup', function() {
  pk_4_4.textContent = (
    (parseInt(f_4_4_1.value) +
      parseInt(f_4_4_2.value) +
      parseInt(f_4_4_3.value)) /
    3
  ).toFixed(3);
});

let b_4 = document.querySelector('.b_4');
let kpk_4 = document.querySelector('.kpk_4');

f_4_1.parentNode.addEventListener('keyup', function() {
  kpk_4.textContent = (
    parseFloat(pk_4_1.textContent) *
      parseFloat(g_4_1.value.replace(/\,/g, '.')) +
    parseFloat(pk_4_2.textContent) *
      parseFloat(g_4_2.value.replace(/\,/g, '.')) +
    parseFloat(pk_4_3.textContent) *
      parseFloat(g_4_3.value.replace(/\,/g, '.')) +
    parseFloat(pk_4_4.textContent) * parseFloat(g_4_4.value.replace(/\,/g, '.'))
  ).toFixed(3);
  legend4.textContent = kpk_4.textContent;
});

//Получаем переменные 5ой характеристики и высчитываем ПК, КПК
let f_5_1 = document.querySelector('.f_5_1');
let f_5_1_1 = document.querySelector('.f_5_1_1');
let f_5_1_2 = document.querySelector('.f_5_1_2');
let g_5_1 = document.querySelector('.g_5_1');
let pk_5_1 = document.querySelector('.pk_5_1');

f_5_1.addEventListener('keyup', function() {
  pk_5_1.textContent = (
    (parseInt(f_5_1_1.value) + parseInt(f_5_1_2.value)) /
    2
  ).toFixed(3);
});

let f_5_2 = document.querySelector('.f_5_2');
let f_5_2_1 = document.querySelector('.f_5_2_1');
let f_5_2_2 = document.querySelector('.f_5_2_2');
let f_5_2_3 = document.querySelector('.f_5_2_3');
let g_5_2 = document.querySelector('.g_5_2');
let pk_5_2 = document.querySelector('.pk_5_2');

f_5_2.addEventListener('keyup', function() {
  pk_5_2.textContent = (
    (parseInt(f_5_2_1.value) +
      parseInt(f_5_2_2.value) +
      parseInt(f_5_2_3.value)) /
    3
  ).toFixed(3);
});

let b_5 = document.querySelector('.b_5');
let kpk_5 = document.querySelector('.kpk_5');

f_5_1.parentNode.addEventListener('keyup', function() {
  kpk_5.textContent = (
    parseFloat(pk_5_1.textContent) *
      parseFloat(g_5_1.value.replace(/\,/g, '.')) +
    parseFloat(pk_5_2.textContent) * parseFloat(g_5_2.value.replace(/\,/g, '.'))
  ).toFixed(3);
  legend5.textContent = kpk_5.textContent;
});

//Считаем ИПК
let ipk = document.querySelector('.ipk');

features.addEventListener('keyup', function() {
  ipk.textContent = (
    kpk_1.textContent * b_1.value.replace(/\,/g, '.') +
    kpk_2.textContent * b_2.value.replace(/\,/g, '.') +
    kpk_3.textContent * b_3.value.replace(/\,/g, '.') +
    kpk_4.textContent * b_4.value.replace(/\,/g, '.') +
    kpk_5.textContent * b_5.value.replace(/\,/g, '.')
  ).toFixed(3);
});

//Строим график
features.addEventListener('keyup', function() {
  chart1.style.height = kpk_1.textContent * 160 + 'px';
  chart2.style.height = kpk_2.textContent * 160 + 'px';
  chart3.style.height = kpk_3.textContent * 160 + 'px';
  chart4.style.height = kpk_4.textContent * 160 + 'px';
  chart5.style.height = kpk_5.textContent * 160 + 'px';
});
