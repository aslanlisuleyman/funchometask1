function nomre(nomre1,nomre2,nomre3){


    let boyuk = nomre1; 

    if (nomre2 > boyuk) {
      boyuk = nomre2; 
    }
  
    if (nomre3 > boyuk) {
      boyuk = nomre3; 
    }
  
    return boyuk;

}
console.log(nomre(3,18,14));