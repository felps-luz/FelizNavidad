document.addEventListener('DOMContentLoaded', function () {

    const Natal = new Date('December 25, 2023 00:00:00').getTime();

    const countdown = setInterval(function () {
        const now = new Date().getTime();
        const distance = Natal - now;

        const dias = Math.floor(distance / (1000 * 60 * 60 * 24));
        const horas = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('dias').innerHTML = dias + 'dias';
        document.getElementById('horas').innerHTML = horas + 'h';
        document.getElementById('minutos').innerHTML = minutos + 'min';
        document.getElementById('segundos').innerHTML = segundos + 'seg';


        if (distance < 0) {
            clearInterval(countdown);
            document.getElementById('countdown').innerHTML = 'FELIZ NATALLLL!';
        }
    }, 1000);
});



