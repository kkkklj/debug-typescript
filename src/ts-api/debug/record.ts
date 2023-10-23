type TypeObj = {
  key1: string
  key2: number
}
const obj:TypeObj = {
  key1:'1',
  key2:2
}
/**
* @remark key只能为数字，val为TypeObj
*/
const recordObj1:Record<number,TypeObj> = {
  // key1:obj1
}
recordObj1[1] = obj

// const recordList: Record<number,string> = []
// recordList[2] = '1'

/**
* @remark key为string，val为typeObj或string
*/
const recordObj2:Record<string,TypeObj | string> = {
  k1:obj,
  k2:''
}


// 有啥用?
// 当要声明一个shallow对象需要这么麻烦
type StringKeyObject = {
  [key:string] :any
}
const shallowObj1:StringKeyObject = {
  key:1
}
// but use Record only
const shallowObj2:Record<string,any> = {
  key:1
}