//JS에서 map 합수는 언제 ?
// map 메서드 안에 정의한 커스컴 조건식에 따라서 새로운 배열 만들어주는역할 


export const map = <T>(array:T[],callback:(value:T,index?:number)=>Q):Q[]=> {
let result =Q[] =[]
for(let index = 0;index < array.length;index++){

  const value = array[index]
  result = [...result,callback(value,index)]
}
  return result 
}