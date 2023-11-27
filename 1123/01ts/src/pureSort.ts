// sort 함수를 순수함수로 구현 !
 
 export const pureSort = <T>(array: readonly T[]):T[] => {
let deepCoied = [...array]
return deepCoied.sort()
  
}