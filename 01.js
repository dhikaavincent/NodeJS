let score = 99;
let result = ""

if (score >= 90) {
    result = "Nilai anda A"
}else if (score >= 80 && score <= 89) {
    result = "Nilai anda B"
}else if (score >= 70 && score <=79) {
    result = "Nilai anda C"
}else if (score >= 60 && score <=69) { 
    result = "Nilai anda D"
}else if (score < 60){
    result = "Nilai anda E"
}
console.log(result)