/**
 * 泛型
 * @param name 
 * @returns 
 */
function g1 <T> (name:T) : T {
  return name;
}
const num:number = 1;
const numType = g1(num);

const str:string = '';
const strType = g1(str);

const numArr:number[] = [];
const arrType = g1(numArr);