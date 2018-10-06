//zad1

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

//zad2
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