function siyahi(massiv) {
    var siyahi2=[]
    for (let i = massiv.length - 1; i >= 0; i--) {
      siyahi2.push(massiv[i])
    }
    return siyahi2
  }
  
  console.log(siyahi([1, 2, 3, 4, 5]));
  