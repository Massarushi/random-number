var numeroParaEncontrar = 0;
var tentativas = 0;

function atualizar(){
    var elemento = document.getElementById('xablau');
    elemento.value = '';

    numeroParaEncontrar = parseInt(Math.random() *100)

    console.log('numero ' + numeroParaEncontrar);
}
atualizar();

function verificarNumeros() {
    var elemento = document.getElementById('xablau')

    var numero = elemento.value

    if( numero > 100 || numero < 0)
    {
        alert('🚨 Aposta inválida')
        return; // encera o if
    }

    if (numero > numeroParaEncontrar)
    {
        tentativas++
        alert ('🚨 O numero para ser encontrado é MENOR')
    } 
    
    else if (numero < numeroParaEncontrar)
    {
        tentativas++
        alert ('🚨 O número para ser encontrado é MAIOR!')
    } 
    
    else
     {
        alert ('✅ Parabéns, você acertou com: ' + tentativas + ' erros!');

        refresh();
    }
}    