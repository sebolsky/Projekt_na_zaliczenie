function wyliczDawkeLeku(){

  let waga = document.getElementById("weight").value;
  
  let typLeku = document.getElementById("names_of_medications").value;

  console.log(waga);
  console.log(typLeku);

if(isNaN(waga)){
  document.getElementById("amount").innerHTML = "Niedozwolona wartość!"
}
else if(waga <= 20 || waga >= 150){
  document.getElementById("amount").innerHTML = "Podano nieprawidłową wagę!"
}

else if(typLeku == 'paracetamol'){
let dawkaLeku = waga * 0.01
document.getElementById("amount").innerHTML= `Rekomendowana dawka leku wynosi ${dawkaLeku} g paracetamolu`;

}else if(typLeku == 'ibuprofen'){
  let dawkaLeku = waga * 0.005
  document.getElementById("amount").innerHTML= `Rekomendowana dawka leku wynosi ${dawkaLeku} g ibuprofenu`;
}
  
}
