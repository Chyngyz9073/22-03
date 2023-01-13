# 22-03

// 1) task
let i = 0;
while (i <= 20) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
}

// 2) task

let num,
  sum = 0;
do {
  num = +prompt('Введите число');
  if (num > 0) {
    sum += num;
  }
  console.log(sum);
} while (num > 0);
