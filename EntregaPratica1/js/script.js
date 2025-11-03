
document.addEventListener("DOMContentLoaded", function() {


    
    const nav = document.querySelector('nav[role="navigation"]');
    const navList = nav.querySelector('ul');

    if (navList) {
        
        const menuToggle = document.createElement('button');
        menuToggle.textContent = '☰ Menu';
        menuToggle.classList.add('menu-toggle');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-controls', 'menu-lista');
        
        nav.prepend(menuToggle);
        
        navList.id = 'menu-lista';

        menuToggle.addEventListener('click', function() {
            const isExpanded = navList.style.display === 'flex';
            
            if (isExpanded) {
                navList.style.display = 'none';
                menuToggle.setAttribute('aria-expanded', 'false');
            } else {
                navList.style.display = 'flex'; //
                menuToggle.setAttribute('aria-expanded', 'true');
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