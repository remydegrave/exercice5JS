document.getElementById('clickButton').onclick  =showAlert;
function showAlert(){
    var dividende = document.getElementById('dividende').Value;
    var diviseur = document.getElementById('diviseur').Value;
    var result = (dividende%diviseur)

    alert('reste de la division :' +result)
}