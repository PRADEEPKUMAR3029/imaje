const imageSources = ['01.webp','02.png','03.jpg','04.jpg','05.webp','07.jpg'];

        function changeBackgroundImage() {
            const randomIndex = Math.floor(Math.random() * imageSources.length);
            document.body.style.backgroundImage = `url(${imageSources[randomIndex]})`;
        }

        // Change the background image every 5 seconds (5000 milliseconds)
        setInterval(changeBackgroundImage, 1000);