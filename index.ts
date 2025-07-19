import { listeners } from 'node:process';
import promptSync from 'prompt-sync';
const prompt = promptSync();
//1
 interface user {
  email: string;
  password: string;
  birthdate: string;
}

function check_length(line: string, min_length: number, max_length: number): boolean {
  return line.length >= min_length && line.length <= max_length;
}

const check_email = (line: string): boolean => {
  return line.includes('@') && line.includes('.');
}

function not_same_symbol(line: string): boolean {
  return !/^([a-zA-Z0-9])\1+$/.test(line);
}

function year_valid(date_line: string): boolean {
  if (!/^\d{8}$/.test(date_line)) {
    return false; 
  }

  const year = Number(date_line.slice(4, 8)); 
  const current_year = new Date().getFullYear();
  const age = current_year - year;
  return age > 17 && age < 100;
}



const email_input = prompt("Введіть email: ") ;
const password_input = prompt("Введіть пароль: ") ;
const birthdate_input = prompt("Введіть дату народження: ") ;



const email_valid: boolean =
  check_length(email_input, 8, 1000) && check_email(email_input);

const password_valid: boolean =
  check_length(password_input, 9, 15) && not_same_symbol(password_input);

const birthdate_valid: boolean =  year_valid(birthdate_input);


if (email_valid && password_valid && birthdate_valid) {
  const new_user: user = {
    email: email_input,
    password: password_input,
    birthdate: birthdate_input,
  };

  console.log("Реєстрація пройшла успішно!");
  console.log(new_user);
} else {
  console.log("Реєстрація не вдалася.");}

//2
interface Order {
  name: string;
  phone: string;
  postal_code: string;
  payment_method: 'card' | 'paypal' | 'cash';
}

function name_valid(name: string): boolean {
  return name.length >= 2 && name.length <= 50;
}

function phone_valid(phone: string): boolean {
  return /^\+\d{10,13}$/.test(phone);
}

function poshta_code_valid(code: string): boolean {
  return /^\d{5}$/.test(code);
}

function payment_valid(method: string): method is 'card' | 'paypal' | 'cash' {
  return method === 'card' || method === 'paypal' || method === 'cash';
}

const name_input = prompt("Введіть ім’я: ");
const phone_input = prompt("Введіть номер телефону: ");
const poshta_code_input = prompt("Введіть поштовий індекс (5 цифр): ");
const payment_method_input = prompt("Введіть спосіб оплати (card, paypal або cash): ");

const name_valid_true = name_valid(name_input);
const phone_valid_true = phone_valid(phone_input);
const poshta_code_valid_true = poshta_code_valid(poshta_code_input);
const payment_valid_true = payment_valid(payment_method_input);

if (name_valid_true && phone_valid_true && poshta_code_valid_true &&  payment_valid_true) {
  const order: Order = {
    name: name_input,
    phone: phone_input,
    postal_code: poshta_code_input,
    payment_method: payment_method_input,
  };

  console.log("Замовлення успішно оформлено:");
  console.log(order);
} else {
  console.log("Помилка при оформленні замовлення. Перевірте введені дані:");
} 
//4  
const input: string = prompt("Введи число та тип ('100 C')");
const parts = input.trim().split(" ");
const number = Number(parts[0]);
let type = parts[1] as 'C' | 'F';
if (isNaN(number)) {
  console.log("Помилка: перше значення не є числом");
} else if (!['C', 'F'].includes(type)) {
  console.log("Помилка: невідомий тип ");
}
switch (type) {
    case 'C':
      console.log("Температура F: " + ((number * 9) / 5 + 32).toFixed(2));
      break;
    case 'F':
      console.log("Температура C: " + (((number - 32) * 5) / 9).toFixed(2));
      break;
}
