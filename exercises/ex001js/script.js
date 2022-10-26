function carregar() {
    let msg = document.getElementById("text");
    let img = document.getElementById("image");
    let data = new Date();
    let horario = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();
    let background = document.getElementById('background');
    msg.innerHTML = `Agora são ${horario} horas ${minutos} minutos e ${segundos} segundos.`
    if (horario >= 0 && horario < 12) {
        img.src = "media/fotomanha.png"
        img.alt =  "Foto_Manhã"
        background.style.background = '#ffedcd'
    } else if (horario >= 12 && horario <= 18) {
        img.src = "media/fototarde.png"
        img.alt = "Foto_Tarde"
        background.style.background = '#ed9239'
    } else  {
        img.src = "media/fotonoite.png"
        img.alt = "Foto_Noite"
        background.style.background = '#033592'
    }
}