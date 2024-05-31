//Variables
    const showPass = document.querySelector(".showPass");
    const PassWordInput = document.querySelector("#password");
    const miniscule = document.querySelector(".miniscule");
    const majuscule = document.querySelector(".majuscule");
    const chiffre = document.querySelector(".chiffre");
    const longeur = document.querySelector(".longeur");
    const verificationSection = document.querySelector(".verification");


//main
    //show password when pressing the eye icon
    showPass.addEventListener("click",showPassWord);
    //verification si le mote de passe est sur les bonne condition
    PassWordInput.addEventListener("keyup",verification);
    //faire apparaite la section des condition quand lutilisateur est en focus sur le mot de passe
    PassWordInput.addEventListener("focus",showCondition);
    //faire diparaitre la section des conditon quand lutilisateur quit le champ du mot de pass
    PassWordInput.addEventListener("blur",hideCondition);


//fontciton

    //fonction pour rendre le mote de passe visible quand lutilisateur click
    function showPassWord() {
        if (PassWordInput.type === "password") {
            PassWordInput.type = "text";
        }else{
            PassWordInput.type = "password";
        }
    }

    //fonction pour verifier si le mote de passe verifie les condition
    function verification(){
        //verification des lettres minisle
        let ToutMinisculeLettre = /[a-z]/g;
        let Icon = document.querySelectorAll(".xIcon");
        if(this.value.match(ToutMinisculeLettre)){
            miniscule.style.color = "green";
            Icon[0].classList.replace("bx-x","bx-check");
        }else{
            miniscule.style.color = "rgb(227, 91, 91)";
            Icon[0].classList.replace("bx-check","bx-x");
        }
        //verification des lettre majuscule
        let ToutMajusculeLettre = /[A-Z]/g;
        if(this.value.match(ToutMajusculeLettre)){
            majuscule.style.color = "green";
            Icon[1].classList.replace("bx-x","bx-check");
        }else{
            majuscule.style.color = "rgb(227, 91, 91)";
            Icon[1].classList.replace("bx-check","bx-x");
        }
        //verification des chiffre
        let ToutChiffre = /[0-9]/g;
        if(this.value.match(ToutChiffre)){
            chiffre.style.color = "green";
            Icon[2].classList.replace("bx-x","bx-check");
        }else{
            chiffre.style.color = "rgb(227, 91, 91)";
            Icon[2].classList.replace("bx-check","bx-x");
        }
        //verification de la longeur
        if(this.value.length >= 8){
            longeur.style.color = "green";
            Icon[3].classList.replace("bx-x","bx-check");
        }else{
            longeur.style.color = "rgb(227, 91,91)";
            Icon[3].classList.replace("bx-check","bx-x");
        }
    }
    //faire apparaite la section des condition quand lutilisateur est en focus sur le mot de passe
    function showCondition(){
        verificationSection.classList.replace("Blur-verification-section","show-verification-section")
    }
    function hideCondition(){
        verificationSection.classList.replace("show-verification-section","Blur-verification-section")
    }