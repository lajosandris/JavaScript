let rezultat="";
let print=""
let crtica= "--------------";

for(let i=1; i<=10; i++) {

    for(let j=1; j<=10; j++) {

        rezultat=(i*j);  
        
        print+=( j + " * " + i + " = " + rezultat +"\n" )
        
    }
    
    print+= crtica + "\n";
}

console.log("Tablica množenja: " + "\n" +  print  )  



