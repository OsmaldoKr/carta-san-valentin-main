$(document).ready(function () {
    // Asegurarnos que la carta esté completamente oculta al inicio
    $('#card').css({ 
        'visibility': 'hidden', 
        'opacity': 0, 
        'transform': 'translate(-50%, -50%) scale(0.1)' 
    });

    $('.valentines-day').click(function () {
        // Deshabilitar el clic
        $(this).css('pointer-events', 'none');
        
        // Animación del corazón y texto cayendo
        $('.heart, .text').fadeOut(800);
        
        // Detectar si es móvil
        var isMobile = window.innerWidth <= 600;
        
        if (isMobile) {
            // En móvil: desvanece el sobre más rápido
            $(this).fadeOut(1000, function() {
                // Mostrar la carta
                $('#card').css({ 
                    'visibility': 'visible'
                }).animate({ 
                    'opacity': 1 
                }, {
                    duration: 800, 
                    step: function (now) {
                        var scale = 0.1 + (now * 0.9);
                        $(this).css('transform', 'translate(-50%, -50%) scale(' + scale + ')');
                    },
                    complete: function() {
                        $(this).css('transform', 'translate(-50%, -50%) scale(1)');
                    }
                });
            });
        } else {
            // En desktop: animación original con caída
            $('.envelope').css({ 
                'animation': 'fall 3s linear 1', 
                '-webkit-animation': 'fall 3s linear 1' 
            });
            
            setTimeout(function() {
                $('.valentines-day').fadeOut(500, function() {
                    $('#card').css({ 
                        'visibility': 'visible'
                    }).animate({ 
                        'opacity': 1 
                    }, {
                        duration: 1000, 
                        step: function (now) {
                            var scale = 0.1 + (now * 0.9) + Math.sin(now * Math.PI * 2) * 0.1;
                            $(this).css('transform', 'translate(-50%, -50%) scale(' + scale + ')');
                        },
                        complete: function() {
                            $(this).css('transform', 'translate(-50%, -50%) scale(1)');
                        }
                    });
                });
            }, 800);
        }
    });
});
