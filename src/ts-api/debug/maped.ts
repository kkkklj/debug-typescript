
namespace maped {
  /**
   * 快速修改某个类型中的key，用于转化key 或 转化 value 后定义类型
   */
  type Getters<Type> = {
      [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
  };
  interface Person {
      name: string;
      age: number;
      location: string;
  }
  
  type LazyPerson = Getters<Person>;


  type RemoveKindField<Type> = {
    [Property in keyof Type as Exclude<Property, "kind">]: Type[Property]
  };
  
  interface Circle {
      kind: "circle";
      radius: number;
  }
  
  type KindlessCircle = RemoveKindField<Circle>;
  

  /**
   * 所有必选转化可选
   */
  type mustProps = {
    prop1:string
    prop2:string
  }
  type toMaybe<Type> = {
    [Property in keyof Type]+?: Type[Property];
  };
  type maybeProps = toMaybe<mustProps>

}