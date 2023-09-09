const S = "TACO"

function rainTacos(landscape) {
  let arr = landscape.split`\n`.map(x => [...x])
  for(let i = 0; i < arr[0].length; i++){
    let j = 0
    while(arr[j][i] == ' '){
      j++
      if(j == arr.length) break
    }
    if(j > 0) arr[j - 1][i] = S[i % 4]
  }
  return arr.map(x => x.join``).join`\n`
}