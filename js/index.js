var formValid = document.getElementById('bouton_envoi');
            var nom = document.getElementById('nom');
            var missNom = document.getElementById('missNom');
            var nomValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
            
            formValid.addEventListener('click', validation);
            
            function validation(event){
                //Si le champ est vide
                if (nom.validity.valueMissing){
                    event.preventDefault();
                    missNom.textContent = 'Nom manquant';
                    missNom.style.color = 'red';
                //Si le format de données est incorrect
                }else if (nomValid.test(nom.value) == false){
                    event.preventDefault();
                    missNom.textContent = 'Format incorrect';
                    missNom.style.color = 'orange';
                }else{ 
                }
            }
            
