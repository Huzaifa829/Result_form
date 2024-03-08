
let english = document.querySelector('#EngMrk')
let englishError = document.querySelector('#EngError')
let maths = document.querySelector('#mathMrk')
let mathsError = document.querySelector('#mathError')
let Urdu = document.querySelector('#urduMrk')
let UrduError = document.querySelector('#UrduError')
let phys = document.querySelector('#phyMrk')
let physError = document.querySelector('#phyError')
let totalpertntage = document.querySelector('#totalpertntage')
let grade = document.querySelector('#grade')


document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    if (english.value > 100 || english.value < 0) {
        englishError.style.visibility = 'visible';
    }
    else if (maths.value > 100 || maths.value < 0) {
        mathsError.style.visibility = 'visible';
        englishError.style.visibility = 'hidden';

    }
    else if (Urdu.value > 100 || Urdu.value < 0) {
        UrduError.style.visibility = 'visible';
        mathsError.style.visibility = 'hidden';
        englishError.style.visibility = 'hidden';

    }
    else if (phys.value > 100 || phys.value < 0) {
        physError.style.visibility = 'visible';
        UrduError.style.visibility = 'hidden';
        mathsError.style.visibility = 'hidden';
        englishError.style.visibility = 'hidden';

    }
    else {
        physError.style.visibility = 'hidden';
        UrduError.style.visibility = 'hidden';
        mathsError.style.visibility = 'hidden';
        englishError.style.visibility = 'hidden';
        let totalmrks = +english.value + +maths.value + +Urdu.value + +phys.value
        totalmrks = totalmrks / 400 * 100
        totalpertntage.innerHTML = `${totalmrks}%`
        if(totalmrks <= 100 && totalmrks >= 90){
            grade.innerHTML=`A+ Pass`
        }
        else if(totalmrks < 90 && totalmrks >= 80){
            grade.innerHTML=`A1 Pass`
        }
        else if(totalmrks < 80 && totalmrks >= 70){
            grade.innerHTML=`A Pass`
        }
        else if(totalmrks < 70 && totalmrks >= 60){
            grade.innerHTML=`B Pass but must improve`
        }
        else if(totalmrks < 60 && totalmrks >= 50){
            grade.innerHTML=`C Pass but must improve more`
        }
        else if(totalmrks < 50 && totalmrks >= 40){
            grade.innerHTML=`D Pass but must improve more`
        }
        else{
            grade.innerHTML=`<p style="color: red;font-weight: 600; font-size: 25px;">FAIL<p/>`
        }
    }
})  