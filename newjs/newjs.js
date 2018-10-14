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
        if(i==k){
            ar[j]=(j+k*10)-10;
            cell.innerHTML=ar[j];
            
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