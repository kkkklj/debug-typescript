namespace condition {
  /**
   * 倒是typescript自带的api很多依靠condition实现了(exculde、Extract)
   *  SomeType extends OtherType ? TrueType : FalseType;
   *  结合断言可以灵活变化类型，用于变换return值的类型
   */
  interface IdLabel {
    id: number /* some fields */;
  }
  interface NameLabel {
    name: string /* other fields */;
  } 
  type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;
  function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
    throw "";
    // const idLabel:IdLabel = {
    //   id:1
    // }
    // const nameLabel:NameLabel = {
    //   name:''
    // }
  }
  //NameLabel
  let a = createLabel("typescript");
  //IdLabel
  let b = createLabel(2.8);
  //NameLabel | IdLabel
  let c = createLabel(Math.random() ? "hello" : 42);


  type MessageOf<T> = T extends { message: unknown } ? T["message"] : never;
  interface Email {
    message: string;
  }
  
  interface Dog {
    bark(): void;
  }
  
  type EmailMessageContents = MessageOf<Email>;
                
  //EmailMessageContents = string
  
  type DogMessageContents = MessageOf<Dog>;
  //DogMessageContents = never
  
  /**
   * 结合typeof，可以给配置文件中多个配置的类型进行校验，如下
   */
  type Option<T> = T extends {prop1:string,prop2:string} ? T : T & {prop2:unknown}
  const option1 = {
    prop1:'',
    prop2:''
  }
  const option2 = {
    prop1:''
  }
  export type TypeOp1 = Option<typeof option1>
  export type TypeOp2 = Option<typeof option2>
  let op2:TypeOp2 = {
    prop1:'1',
    prop2:null
  }
  
  /**
   * flat
   */
  type Flatten<T> = T extends any[] ? T[number] : T;
 
  type Str = Flatten<string[]>;
  //string
  type Num = Flatten<number>;
  //number


  /**
   * return type
   */
  type GetReturnType<Type> = Type extends (...args: never[]) => infer Return
  ? Return
  : never;
  type NumberType = GetReturnType<() => number>;
  type neverType = GetReturnType<number>

}