document.addEventListener('DOMContentLoaded', function(){
    var myEle = document.getElementById("agendamento");
    if(myEle  != null){
    e = document.querySelector('#agendamento')
    e.addEventListener('click', function() {
        imagem = document.querySelector('#agendamento')
        imagem.remove()
        main = document.querySelector('main')
        c = document.createElement('h2')
        c.innerHTML = '<p class="centro"> Consulta agendada</p>'
        c.style.color = 'green'
        c.style.fontSize = 'xx-large'
        a = document.createElement('a')
        a.innerHTML = '<figure class="centro"><a target="_blank"><img src="img/check.png" height="200" width="200" ></a></figure>'
        main.appendChild(c)
        main.appendChild(a)
    
    })}

    var myEle = document.getElementById("botao1");
    if(myEle  != null){
    b1 = document.querySelector('#botao1')
    b1.addEventListener('click', function() {
        c = document.createElement('h2')
        submit = document.querySelectorAll('input[type="text"]')
        c.innerHTML = '- ' + submit[0].value
        l = document.querySelectorAll('li')
        l[0].appendChild(c)

    })

    b2 = document.querySelector('#botao2')
    b2.addEventListener('click', function() {
        c = document.createElement('h2')
        submit = document.querySelectorAll('input[type="text"]')
        c.innerHTML = '- ' + submit[1].value
        l = document.querySelectorAll('li')
        l[1].appendChild(c)

    })


    b3 = document.querySelector('#botao3')
    b3.addEventListener('click', function() {
        c = document.createElement('h2')
        submit = document.querySelectorAll('input[type="text"]')
        c.innerHTML = '- ' + submit[2].value
        l = document.querySelectorAll('li')
        l[2].appendChild(c)

    })
    }
})