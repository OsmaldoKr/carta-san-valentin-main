$(document).ready(function () {
    // Al cargar la página, ocultamos las cortinas (si las tienes)
    $('.left-curtain').css('width', '0%');
    $('.right-curtain').css('width', '0%');

    // Asegurarnos que la carta esté completamente oculta al inicio
    $('#card').css({ 
        'visibility': 'hidden', 
        'opacity': 0, 
        'transform': 'scale(0.1)' 
    });

    $('.valentines-day').click(function () {
        // Deshabilitar el clic para evitar múltiples clicks
        $(this).css('pointer-events', 'none');
        
        // Animación de caída del sobre
        $('.envelope').css({ 
            'animation': 'fall 3s linear 1', 
            '-webkit-animation': 'fall 3s linear 1' 
        });
        
        // Animación del corazón y texto cayendo
        $('.heart, .text').fadeOut(800);
        
        // Después de 800ms, ocultar el sobre y mostrar la carta
        setTimeout(function() {
            $('.valentines-day').fadeOut(500, function() {
                // Mostrar la carta con animación
                $('#card').css({ 
                    'visibility': 'visible'
                }).animate({ 
                    'opacity': 1 
                }, {
                    duration: 1000, 
                    step: function (now, fx) {
                        // Efecto de ondulación al aparecer
                        var scale = 0.1 + (now * 0.9) + Math.sin(now * Math.PI * 2) * 0.1;
                        $(this).css('transform', 'scale(' + scale + ')');
                    },
                    complete: function() {
                        // Al terminar, asegurar escala normal
                        $(this).css('transform', 'scale(1)');
                    }
                });
            });
        }, 800);
    });
});
