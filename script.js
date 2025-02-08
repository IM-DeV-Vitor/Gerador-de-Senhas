function gerarSenha() {
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const select = document.getElementById("selequete");
    const tamanho = parseInt(select.value);

    if (isNaN(tamanho) || tamanho <= 0) return "Tamanho inválido!";

    var numeros = '0123456789'.split('');
    var letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    var simbolos = '!@#$%?&*()_-='.split('');

    let caracteres = [].concat(numeros, letras, simbolos);
    let senha = [];

    for (let i = 0; i < tamanho; i++) {
        const randomIndex = Math.floor(Math.random() * caracteres.length);
        senha.push(caracteres[randomIndex]);
    }

    return shuffleArray(senha).join('');
}

document.getElementById("btn").addEventListener("click", function() {
    const palavra = document.getElementById("sennha");
    const senhaGerada = gerarSenha();
    palavra.innerText = senhaGerada; 
});
