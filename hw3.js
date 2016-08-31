//User Storage

/*1*/
var str='';
for (var b = 0; b < 7; ++b){
	str+='#';
	console.log(str)};
/*2*/
			
 var i=0, b=0, str='',str1='',c=0;
/*console .log(' ________');*/
while (c<4){
for (var b=0; b<8; b++){
	if (b%2==0){str=str+' ';}
	if (b%2!==0){str=str+'#';}
}
console.log('|'+str+'|');
for (var i=0; i<8; i++){
	if (i%2==0){str1=str1+'#';}
	if (i%2!==0){str1=str1+' ';}
}
console.log('|'+str1+'|');
str='';
str1='';
 ++c;}
/*console .log(' ________');*/
/*откуда цифра 4 ?*/


/*Практика*/


var user = [],ans =1, fn=' ';
while (ans!==0){
user.firstName= prompt('Введите имя:');
user.lastName = prompt('Введите фамилию:');
user.birthDay = prompt('Дату рождения:');
phone =[];
var n=0;
while (n<2) {
phone[n] = prompt('Номер телефона:');
	n++
	phone.push(phone[n-1]);
    phone.pop();
   };
user.tlf=phone.toString();  /* просто тренировался в использовании*/
user.fn =';';               /*конец строки записи, на всякий случай, может пригодиться */
	for (var b = 0; b < user.length; ++b){
	user.push(user[b]);
	}
	
	ans = prompt('1- вводим данные      0 - выходим из программы');
if (ans==null||ans==' '||ans==0)  {break;}
	
		
}

console.log ('Имя: ' + user.firstName,
		 'Фамилия: ' + user.lastName,
		 'Дата рождения:'+ user.birthDay,
		 'Телефоны :' + user.tlf);

/*  как же и где сохранить данные пользователя "n-1"?  */



