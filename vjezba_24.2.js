let auto = {
    marka: "VW",
    gorivo: "dizel", 
    model: "golf", 
    godina: "2022", 
    boja: "crvena", 
    maxBrzina: 160,
    minBrzina: 0,
    trenutnaBrzina: 0,
    ubrzaj: function(ubrzanje) {
      
        this.trenutnaBrzina+=ubrzanje;
        return this.trenutnaBrzina;
    },
    zakoci: function(brojSekundi){
        while(this.trenutnaBrzina > 0 && brojSekundi >=0){
            this.trenutnaBrzina -=2;
            console.info("Trenutna brzina pri kocenju je: " + this.trenutnaBrzina);
            brojSekundi--;
        }

        return this.trenutnaBrzina;
    },
}


for(let key in auto){
    if(auto.propertyIsEnumerable(key)){
        console.log("kljuc: " + key + "vrijesdnost: " + auto[key] );
    }
}



console.log("Ja vozim auto marke:" +auto.marka);

console.log("Auto vozi brzinom" + auto.trenutnaBrzina);

console.log("auto vozi nakon ubrzanja brzinom " + auto.ubrzaj(10));

console.log("auto vozi nakon kocenja brzinom " + auto.zakoci(2));


let json= JSON.stringify(auto);
console.log(json);