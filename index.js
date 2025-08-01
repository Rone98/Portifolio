
function enviarMensagem(event) {

    event.preventDefault()

    const nome = document.getElementById('campo-nome').value
    const mensagem = document.getElementById('campo-mensagem').value
    const telefone = '330745196794'

    const texto = ` ola me chamo ${nome} , ${mensagem}`
    const mformatada = encodeURIComponent(texto)
    const url = `https://api.whatsapp.com/send?phone=${telefone}&text=${mformatada}`;

    window.open(url, '_blank')

}

console.log(url)




