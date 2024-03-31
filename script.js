
    const body = document.querySelector("body");
    const swalst = Swal.mixin(
        {
            timer: 3300,
            allowOutsideClick: false,
            showConfirmButton: false,
            timerProgressBar: true,
            imageHeight: 90,
        });
    const swals = Swal.mixin(
        {
            allowOutsideClick: false,
            cancelButtonColor: '#FF0040',
            imageHeight: 80,
        }); 

    var step1 = false;
    var step2 = false;
    var step3 = false;
    var step4 = false;
    var ucapan= null;

    const waktuSekarang = new Date().getHours();

    if(waktuSekarang < 10){ucapan = "Selamat Pagi, ";} 
    else if(waktuSekarang < 16){ucapan = "Selamat Siang, ";}
    else if(waktuSekarang < 19){ucapan = "Selamat Sore, ";}
    else{ucapan = "Selamat Malam, ";}

    
    function toggleFullScreen()
    {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    }
    
    
    function mulaiketik(idElem, afterComplete = false)
    {
        var text1 = $(idElem).text(); $(idElem).text('');
        $(idElem).show();
        new TypeIt(idElem, {
            strings: ["" + text1], 
            startDelay: 0, speed: 90, 
            cursor: true, deleteSpeed: 80, 
            breakLines: false, 
            waitUntilVisible: true, lifelike: true,
            afterComplete: afterComplete,
        }).go();
    }
    
    function fStep1(elem) {
        $('#mulai>img').attr('style',"transition:all .8s ease;transform:scale(10);opacity:0");
        elem.remove();
        $('#ket').remove();
        $('#bq , .stiker').fadeIn();
        $('#bq').attr('style: display:block; margin: 0;')
        mulaiketik('#kalimat', function () {
            setTimeout(function() {
                fStep2();
            }, 600);
        })
    }
    
    function fStep2() {
        $('#kalimat').fadeOut().remove();
        step2 = true;
        mulaiketik('#kalimat2', function () {
            mulaiketik('#kalimat3', function () {
                $('#opsL').show();
            })
        })
    }
    
    function fStep3() {
        step3 = true;
        $('#main-intro').addClass('up');
        setTimeout(function() {
            $('#main-intro').remove();
            $('#content').show();
        }, 600);
    }
    
    
$(document).ready( function ()
{
    $(document).on('click', '#mulai', function() 
    {
        toggleFullScreen();
        fStep1($(this));
    });
    
    
    $(document).on('click', '#opsL', function() 
    {
        if (!step2) {
            step2 = true;
            fStep2();
        } else {
            if (!step3) {
                step3 = true;
                fStep3();
            }
        }
        
        $(this).hide();
    });
})