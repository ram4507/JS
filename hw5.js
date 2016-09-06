/*
 * Это простой редактор JavaScript.
 *
 * Введите JavaScript, затем щёлкните правой кнопкой или выберите из меню Выполнить:
 * 1. Запустить, чтобы исполнить выделенный текст (Cmd-R),
 * 2. Исследовать, чтобы вызвать для результата Инспектор Объектов (Cmd-I), или,
 * 3. Отобразить, чтобы вставить результат в комментарий после выделения. (Cmd-L)
 */

var person = [],count_pers=1;	

function addUser(){
var user = [];
  user.id = count_pers;  
  user.firstName = prompt('Введите имя:');
  user.lastName = prompt('Введите фамилию:');
  user.birthDay = prompt('Дату рождения:');
  phone = [];
  var n = true,i=0;
  while (n==true){
	phone[i] = prompt('Номер телефона:');
    phone.push(phone[i]);
	  n=confirm('имеется еще телефон?');
  };
	phone.pop();
  user.tlf = phone.toString();
  
  for (var b = 0; b < user.length; ++b) {
    user.push(user[b]);}
	user.join(',');
	person.push(user);
	
}

function csvFormat() {
	var persona='';
	for(i=0; i<person.length; i++){	persona=persona+person[i].id+';'+person[i].firstName+';'+person[i].lastName+';'+person[i].birthDay+';'+person[i].tlf+';'+'\n';
	}
	return persona;
}
function deluser(){
	var n='';
	n= parseInt(prompt('Укажите код пользователя ?'));
	alert(n);
	person.indexOf(n,0);
	alert(person[n].id);
	person.splice(person[n].id,6);
	alert('hhhhh');
	}


var add=confirm("Внимание!! Добавляем пользователя");
while (add == true) {
addUser(count_pers);
	count_pers++;
add=confirm("Будут еще пользователи?");
}
console.log (csvFormat());
var del=confirm('Желаете удалить пользователя?' );
while (del == true) {
deluser();
	del=confirm("Будут еще удаляемые пользователи?");
}
console.log (csvFormat());
/*
Exception: TypeError: person[n] is undefined
deluser@Scratchpad/54:45:2
@Scratchpad/54:60:1
*/