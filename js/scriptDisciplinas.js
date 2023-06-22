function url(params) {
    if(params){
        return "http://localhost/EquipeJambo-SQMF/api_meuDiploma/public/matriz/"+params
    }else{
        return "http://localhost/EquipeJambo-SQMF/api_meuDiploma/public/"; 
    }
 
}


function getAll() {
    const endpoint = url('78');             
    try {                     
        fetch(endpoint)
        .then(response => response.json())

        .then(data => {
            console.log(data);
            data.disciplinas.forEach((course)=> {
                if (course.natureza == "OBRIGATÓRIA") {
                    if (course.semestre == 1) {
                        outFirst[0].innerHTML = outFirst[0].innerHTML + 
                        `<input class="form-check-input" type="checkbox" id="flexCheckDefault" name=${course.componente} value=${course.cargahoraria} />
                        <label for="flexCheckDefault">${course.componente}</label><br>`;
                    }
                    if (course.semestre == 2) {
                        outSecond[0].innerHTML = outSecond[0].innerHTML + 
                        `<input class="form-check-input" type="checkbox" id="flexCheckDefault" name=${course.componente} value=${course.cargahoraria} />
                        <label for="flexCheckDefault">${course.componente}</label><br>`;
                    }
                    if (course.semestre == 3) {
                        outThird[0].innerHTML = outThird[0].innerHTML + 
                        `<input class="form-check-input" type="checkbox" id="flexCheckDefault" name=${course.componente} value=${course.cargahoraria} />
                        <label for="flexCheckDefault">${course.componente}</label><br>`;
                    }
                    if (course.semestre == 4) {
                        outFourth[0].innerHTML = outFourth[0].innerHTML + 
                        `<input class="form-check-input" type="checkbox" id="flexCheckDefault" name=${course.componente} value=${course.cargahoraria} />
                        <label for="flexCheckDefault">${course.componente}</label><br>`;
                    }
                    if (course.semestre == 5) {
                        outFifth[0].innerHTML = outFifth[0].innerHTML + 
                        `<input class="form-check-input" type="checkbox" id="flexCheckDefault" name=${course.componente} value=${course.cargahoraria} />
                        <label for="flexCheckDefault">${course.componente}</label><br>`;
                    }
                    if (course.semestre == 6) {
                        outSixth[0].innerHTML = outSixth[0].innerHTML + 
                        `<input class="form-check-input" type="checkbox" id="flexCheckDefault" name=${course.componente} value=${course.cargahoraria} />
                        <label for="flexCheckDefault">${course.componente}</label><br>`;
                    }
                    if (course.semestre == 7) {
                        outSeventh[0].innerHTML = outSeventh[0].innerHTML + 
                        `<input class="form-check-input" type="checkbox" id="flexCheckDefault" name=${course.componente} value=${course.cargahoraria} />
                        <label for="flexCheckDefault">${course.componente}</label><br>`;
                    }
                    if (course.semestre == 8) {
                        outEighth[0].innerHTML = outEighth[0].innerHTML + 
                        `<input class="form-check-input" type="checkbox" id="flexCheckDefault" name=${course.componente} value=${course.cargahoraria} />
                        <label for="flexCheckDefault">${course.componente}</label><br>`;
                    }
                    if (course.semestre == 9) {
                        outNinth[0].innerHTML = outNinth[0].innerHTML + 
                        `<input class="form-check-input" type="checkbox" id="flexCheckDefault" name=${course.componente} value=${course.cargahoraria} />
                        <label for="flexCheckDefault">${course.componente}</label><br>`;
                    }
                }
                if (course.natureza == "ELETIVA") {
                    if (course.semestre == 4) {
                        outElectivesFourth[0].innerHTML = outElectivesFourth[0].innerHTML + 
                        `<input class="form-check-input" type="checkbox" id="flexCheckDefault" name=${course.componente} value=${course.cargahoraria} />
                        <label for="flexCheckDefault">${course.componente}</label><br>`;
                    }
                    if (course.semestre == 5) {
                        outElectivesFifth[0].innerHTML = outElectivesFifth[0].innerHTML + 
                        `<input class="form-check-input" type="checkbox" id="flexCheckDefault" name=${course.componente} value=${course.cargahoraria} />
                        <label for="flexCheckDefault">${course.componente}</label><br>`;
                    }
                }
            });
        })              
    } catch(e) {
        console.log(e);
    }
}

getAll();

let outFirst = document.querySelectorAll("#primeiroSemestreInputs");
let outSecond = document.querySelectorAll("#segundoSemestreInputs");
let outThird = document.querySelectorAll("#terceiroSemestreInputs");
let outFourth = document.querySelectorAll("#quartoSemestreInputs");
let outFifth = document.querySelectorAll("#quintoSemestreInputs");
let outSixth = document.querySelectorAll("#sextoSemestreInputs");
let outSeventh = document.querySelectorAll("#setimoSemestreInputs");
let outEighth = document.querySelectorAll("#oitavoSemestreInputs");
let outNinth = document.querySelectorAll("#nonoSemestreInputs");
let outElectivesFourth = document.querySelectorAll('#quartoSemestreInputsEletivas');
let outElectivesFifth = document.querySelectorAll('#quintoSemestreInputsEletivas');


const submitCheckboxes = document.querySelector('#submitCheckboxes');
submitCheckboxes.addEventListener('click', (event) => {
    let selectedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked')
    let horasValores = 0;
    selectedCheckboxes.forEach((checkbox) => {
        horasValores += Number(checkbox.value);
    });
    alert(Number(horasValores));
    
    let names = [];
    selectedCheckboxes.forEach((checkbox) => {
        names.push(" " + checkbox.name);
    });
    alert(names);
});