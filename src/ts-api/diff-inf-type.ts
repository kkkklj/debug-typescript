namespace diffInfType {
  /**
   * inf
   */
  interface parent {
    p1Prop:number
  }
  interface parent2 {
    p2Prop:string
  }
  /**
   * 类组合接口
   */
  class Parent implements parent,parent2 {
    p1Prop: number;
    p2Prop: string;
    constructor() {
      this.p1Prop = 1;
      this.p2Prop = '';
    }
  }
  /**
   * 接口继承
   */
  interface child extends parent {
    child1Prop:number[]
  }
  class Child implements child {
    p1Prop: number;
    child1Prop: number[];
    constructor() {
      this.child1Prop = []
      this.p1Prop = 1;
    }
  }
  const infChild:child = {
    p1Prop:1,
    child1Prop:[]
  }

  /**
   * type类似的效果是通过交叉
   */
  type Person = { 
    name: string 
  }
  type Student = Person & { grade: number  }  
  const student:Student = {
    name:'',
    grade:1
  }
  /**
   * --------------------------------------------
   */

  /**
   * type 独有
   */
  type arrItem = number | string    //联合类型
  const arr: arrItem[] = [1,'2', 3]

  type LimitArray = [string,number];
  const arr1:LimitArray = ['',1]

  /**
   * inf 独有
   * 重复声明自动合并
   * type这么玩不仅不会合并还会报错
   */
  interface InfA {
    name:string
  }
  interface InfA {
    age:number
  }
  const p1:InfA = {
    name:'',
    age:1
  }
}
