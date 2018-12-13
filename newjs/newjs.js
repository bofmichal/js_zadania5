//zad1.1

function tabela1() {
    var tabela = document.createElement('table');
    
    for(var i=0; i<10; i++){
        var row=tabela.insertRow();
        for(var j=0; j<10; j++){
        var cell = row.insertCell();
        
    }
}

console.log(tabela);  
    document.getElementById("tabl1").appendChild(tabela);
    
}
function wyptab1() {
    var ar=[];
    
var tab=document.createElement('table');
for(var i=1; i<11; i++){
    var row=tab.insertRow();
    for(var j=1; j<11; j++){
        var cell = row.insertCell();
        
        for(var k=0; k<11; k++){
        if(i==k){
            ar[j]=(j+k*10)-10;
            cell.innerHTML=ar[j];
            
        }
    }
        
}
       
}

console.log(tab);
console.log(ar);
document.getElementById("tabl1").removeChild(document.querySelector("table"));
document.getElementById("tabl1").appendChild(tab);
}
//zad1.2
function tabela2() {
    var tabela = document.createElement('table');    
    for(var i=0; i<10; i++){
        var row=tabela.insertRow();
        for(var j=0; j<10; j++){
        var cell = row.insertCell();
        
    }
}

console.log(tabela);  
    document.getElementById("tabl2").appendChild(tabela);
    
}
function wyptab2() {
    var ar=[];    
var tab=document.createElement('table');
for(var i=1; i<11; i++){
    var row=tab.insertRow();
    for(var j=1; j<11; j++){
        var cell = row.insertCell();
        
        for(var k=1; k<11; k++){
        if(j==k){
            ar[i]=(i+k*10)-10;
            cell.innerHTML=ar[i];
            
        }
    }
        
}
       
}

console.log(tab);
console.log(ar);
document.getElementById("tabl2").removeChild(document.querySelector("table"));
document.getElementById("tabl2").appendChild(tab);
}
//zad1.3
function tabela3() {
    var tabela = document.createElement('table');
    var wiersze=parseInt(document.getElementById("liczbaw").value);
    var kolumny=parseInt(document.getElementById("liczbak").value);
    for(var i=0; i<wiersze; i++){
        var row=tabela.insertRow();
        for(var j=0; j<kolumny; j++){
        var cell = row.insertCell();
        
    }
}

console.log(tabela);  
    document.getElementById("tabl3").appendChild(tabela);
    
}
function wyptab3() {
    var ar=[];
    var wiersze=parseInt(document.getElementById("liczbaw").value);
    var kolumny=parseInt(document.getElementById("liczbak").value);
var tab=document.createElement('table');
for(var i=1; i<wiersze+1; i++){
    var row=tab.insertRow();
    for(var j=1; j<kolumny+1; j++){
        var cell = row.insertCell();
        
        for(var k=1; k<kolumny+wiersze; k++){
        if(i==k){
            ar[j]=(j+k*kolumny)-kolumny;
            cell.innerHTML=ar[j];
            
        }
    }
        
}
       
}

console.log(tab);
console.log(ar);
document.getElementById("tabl3").removeChild(document.querySelector("table"));
document.getElementById("tabl3").appendChild(tab);
}
//zad 2.1
var ara=[];
function tablica1() {
    //var ar=[];
    for (var i = 0; i < 20; ++i) {
        
        ara[i] =(Math.floor(Math.random() * 10) + 1);
    }
    document.getElementById("tablica1").innerHTML = ara;

}
function tabela21() {
    var tabela = document.createElement('table');
    var wiersze=ara.length;
    for(var i=0; i<wiersze; i++){
        var row=tabela.insertRow();
        for(var j=0; j<1; j++){
        var cell = row.insertCell();
        cell.innerHTML=ara[i];
    }
}

console.log(tabela);  
    document.getElementById("tabl21").appendChild(tabela);
    
}
function sortr() {
    var mara=ara;
    var zmiana;
    do {
    zmiana = false;
    for (var i = 0; i < mara.length - 1; ++i) {
    if (mara[i] > mara[i + 1]) {
    var tmp = mara[i];
    mara[i] = mara[i + 1];
    mara[i + 1] = tmp;
    zmiana = true;
    }
    }
    } while (zmiana)
    var tabela = document.createElement('table');
    var wiersze=mara.length;
    for(var i=0; i<wiersze; i++){
        var row=tabela.insertRow();
        for(var j=0; j<1; j++){
        var cell = row.insertCell();
        cell.innerHTML=mara[i];
    }
}
console.log(mara);
console.log(tabela); 
document.getElementById("tabl21").removeChild(document.querySelector("table")); 
    document.getElementById("tabl21").appendChild(tabela);
    
}
function sortm() {
    var rara=ara;
    var zmiana;
    do {
    zmiana = false;
    for (var i = 0; i < rara.length - 1; ++i) {
    if (rara[i] < rara[i + 1]) {
    var tmp = rara[i];
    rara[i] = rara[i + 1];
    rara[i + 1] = tmp;
    zmiana = true;
    }
    }
    } while (zmiana)
    var tabela = document.createElement('table');
    var wiersze=rara.length;
    for(var i=0; i<wiersze; i++){
        var row=tabela.insertRow();
        for(var j=0; j<1; j++){
        var cell = row.insertCell();
        cell.innerHTML=rara[i];
    }
}
console.log(rara);
console.log(tabela); 
document.getElementById("tabl21").removeChild(document.querySelector("table")); 
    document.getElementById("tabl21").appendChild(tabela);
    
}
//zad 2.2
function parzyste() {
    var mara=ara;
    var qqq=[];
    for (var i = 0; i < mara.length ; ++i) {
    if (mara[i]%2==0) {
    qqq[i]=mara[i];    
    }
    else{
        qqq[i]=null;
    }
    }
    
    var tabela = document.createElement('table');
    var wiersze=mara.length;
    for(var i=0; i<wiersze; i++){
        var row=tabela.insertRow();
        for(var j=0; j<1; j++){
        var cell = row.insertCell();
        cell.innerHTML=qqq[i];
    }
}
console.log(mara);
console.log(tabela); 
document.getElementById("tabl21").removeChild(document.querySelector("table")); 
    document.getElementById("tabl21").appendChild(tabela);
    
}
function nieparzyste() {
    var wara=ara;
    var qqq=[];
    for (var i = 0; i < wara.length ; ++i) {
    if (wara[i]%2!=0) {
    qqq[i]=wara[i];    
    }
    else{
        qqq[i]=null;
    }
    }
    
    var tabela = document.createElement('table');
    var wiersze=wara.length;
    for(var i=0; i<wiersze; i++){
        var row=tabela.insertRow();
        for(var j=0; j<1; j++){
        var cell = row.insertCell();
        cell.innerHTML=qqq[i];
    }
}
console.log(wara);
console.log(tabela); 
document.getElementById("tabl21").removeChild(document.querySelector("table")); 
    document.getElementById("tabl21").appendChild(tabela);
    
}
function wszystkie() {
    var tabela = document.createElement('table');
    var wiersze=ara.length;
    for(var i=0; i<wiersze; i++){
        var row=tabela.insertRow();
        for(var j=0; j<1; j++){
        var cell = row.insertCell();
        cell.innerHTML=ara[i];
    }
}

console.log(tabela);  
document.getElementById("tabl21").removeChild(document.querySelector("table"));
    document.getElementById("tabl21").appendChild(tabela);
}

//zad2.3dwie kolumny

function dwie_kolumny() {
    var miara=ara;
    var ar=[];
    var tabela = document.createElement('table');
    var wiersze=miara.length;
    for(var i=0; i<10; i++){
        var row=tabela.insertRow();
        for(var j=0; j<2; j++){
        var cell = row.insertCell();
        for(var k=0; k<21; k++){
            if(j==k){
                ar[i]=miara[i+(10*j)];
                cell.innerHTML=ar[i];
                
            }
        }
    }
}
console.log(miara);
console.log(tabela); 
document.getElementById("tabl21").removeChild(document.querySelector("table")); 
    document.getElementById("tabl21").appendChild(tabela);
    
}