

//range 함수는 숫자로 구성 된 2개의 인작밦을 받아서 그 2개의 숫자 사이에 존재하는 숫자를 모두 더한 결과 갓ㅂ을 반환 하는 함수


//(1,10) => [1,2,3,4,5,6,7,8,9] 
export const range =(from:number,to:number):number[]=> {

  return from < to ? [from,...range(from+1,to)]:[]
}