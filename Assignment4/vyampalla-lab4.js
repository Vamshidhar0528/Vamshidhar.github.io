// 1 In the hero section change the main headline to the following text (do not include the wrapping quotes):
(function(){
    document.querySelector('#hero h1').textContent= "Supercharge Your Brand with Stellar Marketing";
})();
// 2 Change the line of text below the hero headline to the following text (do not include the wrapping quotes):
(function(){
    document.querySelector('#hero p').innerHTML = "Leverage innovative strategies from Stellar Marketing to make your business <b><i>shine</i></b> and <b><i>succeed</i></b>.";
})();
// 3 Change the image in the background of the hero to the one below.
(function(){
    document.querySelector('#hero').style.backgroundImage = "url('https://picsum.photos/id/683/1280/720')";
})();
//4 Change the background color of the nav bar to the same color that is used in the footer.
(function(){
    document.querySelector('.bg-blue-600.text-white.p-4').style.background = '#1F2937';
})();
// 5 Remove the get started Call-to-action (CTA) from the hero.
(function(){
    document.querySelector('.relative.bg-blue-600.text-white.px-6.py-2.rounded.z-20').remove();
})();
// 6 In the services section change the icons color to a light blue (#6495ed).
(function(){
    document.querySelector('.material-symbols-outlined.text-6xl').style.color = '#6495ed';
})();
// 7 The icons use the “Material Symbols Outlined” library. Change the digital marketing icon to use ‘Ads Click’ instead of the current icon.
(function(){
    document.querySelector('[data-icon="digital"]').innerHTML = "ads_click";
})();
// 8 In the “Specialized Marketing Solutions” section make a change to the layout of the tiles so that at >= 1024px they are 4 across instead of 2 across.
(function () {
    const productcards = document.querySelector('[data-section="product_cards"]');
    if (window.innerWidth >= 1024) {
        productcards.style.gridTemplateColumns = "repeat(4, 1fr)";
        productcards.style.gridTemplateRows = "auto"; 
    }     
})();
// 9 In the same section change the Musicians image to the following: https://picsum.photos/id/453/400/300
(function(){
    const MusiciansImage = document.querySelector('img[alt="Musicians"]');
    if(MusiciansImage){
        MusiciansImage.src = 'https://picsum.photos/id/453/400/300';
    }
})();

// Graduate Additional Requirements
(function() {
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default submission
            const name = contactForm.querySelector('input[name="name"]').value;
            const email = contactForm.querySelector('input[name="email"]').value;
            if (name && email) {
                alert(`Thank you, ${name}! We will be in touch with you shortly at ${email}.`);
            } else {
                alert("Please provide a name and email.");
            }
        });
    }
})();