 /*1*/
function compar() {
  var b = prompt('Укажите число'),
  c = prompt('Укажите число');
	console.log(Math.max(b,c));
 
}
compar();
/*2*/
var str = '',
b = 0,
count = 0;
function countBs(str) {
  for (b = 0; b < str.length; b++) {
    if (str.charAt(b) == 'B') count++;
  }
  return count;
}
str = prompt('Введите строку символов:', str);
console.log('Символов "B" в приведенной строке : ' + countBs(str));


var str='', b=0, count=0, simb='';
function countChar(str, simb) {
  for ( b = 0; b < str.length ; b++ ) {
    if ( str.charAt(b) == simb ) count++;
  }
  return count;
}
str = prompt('Введите строку символов:', str);
simb = prompt('Какой символ ищем?', simb);
console.log('В приведенной строке,искомых символов : '+countChar( str, simb ) );


/*практика*/

function addUser(user){
var user = [],fn = ' ',ans = true;
/*while (ans !== false) {}*/
  user.firstName = prompt('Введите имя:');
  user.lastName = prompt('Введите фамилию:');
  user.birthDay = prompt('Дату рождения:');
  phone = [];
  var n = 0;
  while (n < 2) {
    phone[n] = prompt('Номер телефона:');
    n++
    phone.push(phone[n - 1]);
    phone.pop();
  };
  user.tlf = phone.toString(); /* просто тренировался в использовании*/
  user.fn = ';'; /*конец строки записи, на всякий случай, может пригодиться */
  for (var b = 0; b < user.length; ++b) {
    user.push(user[b]);}
	
  
console.log(user.firstName+user.lastName+user.birthDay+user.tlf+user.fn);
console.log('Имя: ' + user.firstName, 'Фамилия: ' + user.lastName, 'Дата рождения:' + user.birthDay, 'Телефоны :' + user.tlf);
/*ans = confirm('Продолжим? ');
  if (ans == false) { break;}*/
	
}
addUser();


