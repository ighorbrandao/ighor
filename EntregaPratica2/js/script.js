
document.addEventListener("DOMContentLoaded", function() {


    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.getElementById('menu-lista');

    if (menuToggle && navList) {
        menuToggle.addEventListener('click', function() {
           
            navList.classList.toggle('active');
            
           
            const isExpanded = navList.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
            
            
            if (isExpanded) {
                menuToggle.innerHTML = '&times; Fechar'; 
            } else {
                menuToggle.innerHTML = '&#9776; Menu'; 
            }
        });
    }

  
    function aplicarMascara(idInput, funcaoMascara) {
        const input = document.getElementById(idInput);
        if (input) {
            input.addEventListener('input', function(e) {
                
                e.target.value = funcaoMascara(e.target.value);
            });
        }
    }

    
    function mascaraCPF(valor) {
        return valor
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2') 
            .replace(/(\d{3})(\d)/, '$1.$2') 
            .replace(/(\d{3})(\d{1,2})/, '$1-$2') 
            .substring(0, 14); 
    }

   
    function mascaraTelefone(valor) {
        return valor
            .replace(/\D/g, '') 
            .replace(/^(\d{2})(\d)/g, '($1) $2') 
            .replace(/(\d{5})(\d)/, '$1-$2') 
            .replace(/(\d{4})(\d)/, '$1-$2') 
            .substring(0, 15); 
    }

   
    function mascaraCEP(valor) {
        return valor
            .replace(/\D/g, '') 
            .replace(/(\d{5})(\d)/, '$1-$2') 
            .substring(0, 9);
    }

    
    aplicarMascara('cpf', mascaraCPF);
    aplicarMascara('telefone', mascaraTelefone);
    aplicarMascara('cep', mascaraCEP);

});