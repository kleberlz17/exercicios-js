const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (i in nums) {
  if (i == 5) {
    break; //aqui ele interrompeu no 5.
  }
  console.log(`${i} = ${nums[i]}`);
}

for (y in nums) {
  if (y == 5) {
    continue; //aqui ele foi até o 4, no indice 5 ele continuou no indice 6.
  }
  console.log(`${y} = ${nums[y]}`);
}
