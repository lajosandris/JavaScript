
let print=""


for(let i=1; i<=10; i++) {

    for(let j=1; j<=10; j++) {
        
        print+=( j + " * " + i + " = " + i*j + "\n" )
        
    }
    
    print+= "-------------" + "\n";
}

console.log("Tablica množenja: " + "\n" +  print  )  



