import { typeError } from './../error/typeError.js';
import { isNumber } from './../utils/typeOf.js';


export function getRandom(n) {
  if (!n) typeError('getRandom 함수는 1개 이상의 매개변수를 받아야 합니다.')
  if (!isNumber(n)) typeError('getRandom 함수의 매개변수는 숫자 타입이어야 합니다..')

  return Math.round(Math.random() * n)
}