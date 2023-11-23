let arrayList = ['a', 'b', 'c', 'd', 'e'];

const anotherArrayList = arrayList;

arrayList = []; //output different
//arrayList.length = 0;
//arrayList.splice(0, arrayList.length);
/*
while(arrayList.length) {
    arrayList.pop();
}
*/
console.log(anotherArrayList);
console.log(arrayList)