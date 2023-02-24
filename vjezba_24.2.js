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
        let brzina=0;
        this.trenutnaBrzina+=ubrzanje;
        return this.trenutnaBrzina;
    },
    //zakoci: function(),
}


console.log("Ja vozim auto marke:" +auto.marka);
