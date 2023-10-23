const obj_typeof = {
  a:1,
  b:'',
}
type objType = typeof obj_typeof;
/**
 * function return value
 */
function f() {
  return { x: 10, y: 3 };
}
type P = ReturnType<typeof f>;
/**
type P = {
    x: number;
    y: number;
}
 */

/**
 * but
 */
function genericFunc<T> (name:T) :T {
  return name
}
type UnKnow = ReturnType<typeof genericFunc>
type NumberType = ReturnType<typeof genericFunc<number>>
type StrType = ReturnType<typeof genericFunc<string>>