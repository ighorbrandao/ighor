
document.addEventListener("DOMContentLoaded", function() {

    
    const mainContent = document.querySelector('main[role="main"]');

   
    function initMenu() {
        const menuToggle = document.querySelector('.menu-toggle');
        const navList = document.getElementById('menu-lista');

        if (menuToggle && navList) {
            menuToggle.addEventListener('click', function() {
                
                const isExpanded = navList.classList.toggle('active');
                
               
                menuToggle.setAttribute('aria-expanded', isExpanded);
                
                
                menuToggle.innerHTML = isExpanded ? '&times; Fechar' : '&#9776; Menu';
            });
        }
    }

    
    function initMasks() {
       
        function aplicarMascara(idInput, funcaoMascara) {
            
            const input = document.getElementById(idInput); 
            if (input) {
                input.addEventListener('input', (e) => e.target.value = funcaoMascara(e.target.value));
            }
        }
        function mascaraCPF(v) { return v.replace(/\D/g, '').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d{1,2})/, '$1-$2').substring(0, 14); }
        function mascaraTelefone(v) { return v.replace(/\D/g, '').replace(/^(\d{2})(\d)/g, '($1) $2').replace(/(\d{5})(\d)/, '$1-$2').replace(/(\d{4})(\d)/, '$1-$2').substring(0, 15); }
        function mascaraCEP(v) { return v.replace(/\D/g, '').replace(/(\d{5})(\d)/, '$1-$2').substring(0, 9); }

        
        aplicarMascara('cpf', mascaraCPF);
        aplicarMascara('telefone', mascaraTelefone);
        aplicarMascara('cep', mascaraCEP);
    }
    
    
    function initFormValidation() {
        
        const form = document.getElementById('form-cadastro'); 
        if (!form) return; 

        const formSucesso = document.getElementById('form-sucesso');
        
        
        function showError(input, message) {
            clearError(input); 
            input.classList.add('invalid');
            const errorSpan = document.createElement('span');
            errorSpan.className = 'form-error';
            errorSpan.textContent = message;
            
            input.parentElement.appendChild(errorSpan); 
        }

        function clearError(input) {
            input.classList.remove('invalid');
            const errorSpan = input.parentElement.querySelector('.form-error');
            if (errorSpan) {
                errorSpan.remove();
            }
        }

        
        function validaNome(input) {
            if (input.value.trim().length < 3) {
                showError(input, 'O nome deve ter no mínimo 3 caracteres.');
                return false;
            }
            
            if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s']+$/.test(input.value)) { 
                showError(input, 'O nome deve conter apenas letras e espaços.');
                return false;
            }
            clearError(input);
            return true;
        }
        
        function validaEmail(input) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
            if (!re.test(input.value.trim())) {
                showError(input, 'Por favor, insira um e-mail válido.');
                return false;
            }
            clearError(input);
            return true;
        }

        function validaCampoSimples(input, minLength, nomeCampo) {
            if (input.value.trim().length < minLength) {
                showError(input, `${nomeCampo} está incompleto.`);
                return false;
            }
            clearError(input);
            return true;
        }

        
        form.addEventListener('submit', function(e) {
            e.preventDefault(); 
            
            formSucesso.style.display = 'none'; 

            
            let isValid = true;
            isValid &= validaNome(document.getElementById('nome'));
            isValid &= validaEmail(document.getElementById('email'));
            isValid &= validaCampoSimples(document.getElementById('cpf'), 14, 'CPF'); 
            isValid &= validaCampoSimples(document.getElementById('telefone'), 14, 'Telefone'); 
            isValid &= validaCampoSimples(document.getElementById('cep'), 9, 'CEP'); 
            isValid &= validaCampoSimples(document.getElementById('endereco'), 5, 'Endereço');
            isValid &= validaCampoSimples(document.getElementById('cidade'), 3, 'Cidade');
            isValid &= validaCampoSimples(document.getElementById('estado'), 1, 'Estado');
            
            
            const dataNasc = document.getElementById('nascimento');
            if(dataNasc.value === '') {
                showError(dataNasc, 'Por favor, insira sua data de nascimento.');
                isValid = false;
            } else {
                clearError(dataNasc);
            }

            
            if (isValid) {
                console.log('Formulário Válido. Enviando...');
                formSucesso.style.display = 'block'; 
                form.reset(); 
                
            } else {
                console.log('Formulário Inválido.');
            }
        });
    }

    


const routes = {
    '/': 'home.html',
    '/index.html': 'home.html',
    '/projetos.html': 'projetos.html',
    '/cadastro.html': 'cadastro.html',
    
    '/projeto-ong/': 'home.html', 
    '/projeto-ong/index.html': 'home.html',
    '/projeto-ong/projetos.html': 'projetos.html',
    '/projeto-ong/cadastro.html': 'cadastro.html'
};


async function loadPage(url) {
    try {
        
        const path = new URL(url).pathname;

       
        const contentFile = routes[path] || routes['/']; 

        
        const response = await fetch(contentFile);
        if (!response.ok) throw new Error(`Não foi possível carregar ${contentFile}.`);
        
        const pageHtml = await response.text();

        
        mainContent.innerHTML = pageHtml;
        
        
        if (path.includes('projetos')) {
            document.title = "Nossos Projetos - Conexão Social";
        } else if (path.includes('cadastro')) {
            document.title = "Cadastro - Conexão Social";
        } else {
            document.title = "Conexão Social - Transformando Vidas";
        }

        
        initPageScripts(); 
        window.scrollTo(0, 0); 

    } catch (error) {
        console.error('Erro ao carregar a página:', error);
        mainContent.innerHTML = `<div class="container"><div class="alert alert-error"><strong>Oops!</strong> Não foi possível carregar o conteúdo. Tente novamente.</div></div>`;
    }
}


function handleLinkClick(e) {
    const link = e.target.closest('a');
    
    
    if (link && link.href.includes(window.location.origin) && !link.href.includes('#') && !link.href.startsWith('mailto:')) {
        e.preventDefault(); 
        
        const url = link.href;
        
        
        history.pushState(null, '', url);
        
       
        loadPage(url);
    }
}


document.addEventListener('click', handleLinkClick);


window.addEventListener('popstate', () => {
    loadPage(window.location.href);
});


function initPageScripts() {
    initMenu(); 
    initMasks(); 
    initFormValidation(); 
}


loadPage(window.location.href);

}); 