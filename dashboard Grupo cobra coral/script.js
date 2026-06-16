window.onload = function () {

new Chart(
document.getElementById('barras'),
{
type:'bar',
data:{
labels:['RotaMax','ViaCargo','FlashLog'],
datasets:[{
label:'Atrasos',
data:[2,3,2]
}]
}
}
);

new Chart(
document.getElementById('regioes'),
{
type:'bar',
data:{
labels:['Sul','Sudeste','Nordeste'],
datasets:[{
label:'Atrasos',
data:[2,2,2]
}]
}
}
);

new Chart(
document.getElementById('pizza'),
{
type:'doughnut',
data:{
labels:['ViaCargo','RotaMax','FlashLog'],
datasets:[{
data:[66.7,50,66.7]
}]
}
}
);

};