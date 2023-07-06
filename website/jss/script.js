<script>
        document.addEventListener('DOMContentLoaded', function() {
            var contactLink = document.querySelector('.navigation li:nth-child(3) a');
            var contactForm = document.querySelector('.contact');
            var blurBackground = document.querySelector('.blur-background');
            var userInputs = document.querySelectorAll('.user-details input, .user-details textarea');

            contactLink.addEventListener('click', function(event) {
                event.preventDefault();
                contactForm.style.display = 'block';
                blurBackground.style.display = 'block';
                document.body.style.overflow = 'hidden';
                userInputs.forEach(function(input) {
                    input.removeAttribute('disabled');
                });
            });

            blurBackground.addEventListener('click', function() {
                contactForm.style.display = 'none';
                blurBackground.style.display = 'none';
                document.body.style.overflow = 'auto';
                userInputs.forEach(function(input) {
                    input.setAttribute('disabled', 'disabled');
                });
            });
        });

        document.addEventListener('DOMContentLoaded', function() {
    var packageLink = document.querySelector('.navigation li:nth-child(2) a'); // Ganti angka pada nth-child sesuai dengan posisi menu "Our Package" di navigation bar
    var headingSection = document.querySelector('.heading');

    packageLink.addEventListener('click', function(event) {
        event.preventDefault();
        headingSection.scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var homeLink = document.querySelector('.navigation li:first-child a'); // Menggunakan :first-child untuk mengambil link pertama di navigation bar

    homeLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

    </script>