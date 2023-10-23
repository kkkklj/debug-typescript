/**
 * 对联合类型进行整合
 * 通过数组声明联合类型，如果觉得多个竖线太丑不好读
 * 多个联合类型
 */
namespace debugIndex {
  const myArray = [
    {name:'',age:1},
    {name:Symbol(''),age:2}
  ]
  export type Person = typeof myArray[number];
  type MyArr = [
    {name:string,age:number},
    {name:symbol,age:number}
  ]
  type TPerson = MyArr[number]
}

/**
type Person = {
    name: string;
    age: number;
} | {
    name: symbol;
    age: number;
}
 */

namespace debugIndex2 {
  export type Person = { age: number; name: string; alive: boolean };
  type AliveOrName = "alive" | "name";
  type I3 = Person[AliveOrName];
  /**
   * type I3 = string | boolean
   */
}
