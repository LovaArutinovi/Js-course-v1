let arr1 = [7, 22,[1,2,[4,5]], 'ბუშტუკი','ჯგუფი', 15, 'შევქმნათ',':Ddd'];

let arr2 = [...arr1];

arr2[2] = [...arr1[2]];
arr2[2][2] = [...arr1[2][2]];

arr2[2][2][0] = 50;

console.log('arr2',arr2);

console.log('arr1',arr1);