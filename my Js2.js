function getzakat() {
     let baffaloValue = document.getElementById('baffalozakat').value;
     let result;

     if (baffaloValue >=100) {
        result = "2calf of 1 year old and 1calf of 2 year old";
     } else if (baffaloValue>=90) {    
        result = "3calf of 1,1 year old";
     }else if (baffaloValue>=80) {
        result = "2calf of 2year old";
     }else if (baffaloValue>=70) {
        result = "1calf of 1year old 1calf of 2year old"
     }else if (baffaloValue>=60) {
        result = "2calf of 1year old"
     }else if (baffaloValue>=40) {
        result = "1calf of 2year old"
     }else if (baffaloValue>=30) {
        result = "1calf of 1year old"
     }else if (baffaloValue>=1) {
        result = "NO Calf"
     }
    document.getElementById('resultshow').innerText=result;



}