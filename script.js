const btn = document.querySelector("button");

btn.addEventListener('click', () => {
     let images = [
        "https://images.pexels.com/photos/1705254/pexels-photo-1705254.jpeg",
        "https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg",
        "https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg",
        'https://images.pexels.com/photos/3233371/pexels-photo-3233371.jpeg',
        'https://images.pexels.com/photos/673865/pexels-photo-673865.jpeg',
        'https://images.pexels.com/photos/3601422/pexels-photo-3601422.jpeg',
        'https://images.pexels.com/photos/4609731/pexels-photo-4609731.jpeg',
        'https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg',
        'https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg'
    ];

    let random = Math.floor(Math.random() * images.length)
    let randomImage = images[random]
    document.body.style.backgroundSize = 'cover'
    document.body.style.backgroundImage = 'url(' + randomImage + ')'
})
