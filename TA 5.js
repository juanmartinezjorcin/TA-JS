function leapYear(year) {
    retorno = false ;
    if (year % 4 == 0) {
        retorno = true;
        if (year % 100 == 0) {
            retorno = false;
            if (year % 400 == 0) {
                retorno = true;
            }
        }
    }
    console.log(retorno);

}