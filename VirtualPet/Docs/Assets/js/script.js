document.addEventListener("DOMContentLoaded", () => {
    let pet = {
        hunger: 70,
        happiness: 50,
        energy: 50
    };

    const hungerLevelElement = document.getElementById('hungerLevel');
    const happinessLevelElement = document.getElementById('happinessLevel');
    const energyLevelElement = document.getElementById('energyLevel');

    function foodEmojisRain() {
        const emojis = ['🥩', '🍗', '🦴']; // Lista de emojis para chuva
        const container = document.createElement('div'); // Crie um novo elemento de contêiner para os emojis
        container.classList.add('emoji-rain'); // Adicione uma classe para estilização
        emojis.forEach(emoji => {
            const span = document.createElement('span'); // Crie um elemento de span para cada emoji
            span.textContent = emoji; // Defina o texto do span como o emoji atual
            span.style.left = `${Math.random() * window.innerWidth}px`; // Defina a posição horizontal aleatória
            container.appendChild(span); // Adicione o span ao contêiner
        });
        document.body.appendChild(container); // Adicione o contêiner ao corpo do documento
    }

    function playEmojisRain() {
        const emojis = ['⚾️', '⚽️', '🥏', '🥎', '🏈', '🏀']; // Lista de emojis para chuva
        const container = document.createElement('div'); // Crie um novo elemento de contêiner para os emojis
        container.classList.add('emoji-rain'); // Adicione uma classe para estilização
        emojis.forEach(emoji => {
            const span = document.createElement('span'); // Crie um elemento de span para cada emoji
            span.textContent = emoji; // Defina o texto do span como o emoji atual
            span.style.left = `${Math.random() * window.innerWidth}px`; // Defina a posição horizontal aleatória
            container.appendChild(span); // Adicione o span ao contêiner
        });
        document.body.appendChild(container); // Adicione o contêiner ao corpo do documento
    }

    function sleepEmojisRain() {
        const emojis = ['💤', '⭐️', '✨', '🌜']; // Lista de emojis para chuva
        const container = document.createElement('div'); // Crie um novo elemento de contêiner para os emojis
        container.classList.add('emoji-rain'); // Adicione uma classe para estilização
        emojis.forEach(emoji => {
            const span = document.createElement('span'); // Crie um elemento de span para cada emoji
            span.textContent = emoji; // Defina o texto do span como o emoji atual
            span.style.left = `${Math.random() * window.innerWidth}px`; // Defina a posição horizontal aleatória
            container.appendChild(span); // Adicione o span ao contêiner
        });
        document.body.appendChild(container); // Adicione o contêiner ao corpo do documento
    }


    function updatePetDisplay() {
        // Update the progress bars
        hungerLevelElement.value = pet.hunger;
        happinessLevelElement.value = pet.happiness;
        energyLevelElement.value = pet.energy;
    }
    
    function feedPet() {
        pet.hunger -= 10;
        if (pet.hunger < 0) pet.hunger = 0;
        updatePetDisplay();
        foodEmojisRain();
    }

    function playWithPet() {
        pet.happiness += 10;
        pet.energy -= 10;
        if (pet.happiness > 100) pet.happiness = 100;
        if (pet.energy < 0) pet.energy = 0;
        updatePetDisplay();
        playEmojisRain();
    }

    function sleepPet() {
        pet.energy += 10;
        if (pet.energy > 100) pet.energy = 100;
        updatePetDisplay();
        sleepEmojisRain();
    }

    
    

    document.getElementById('feedBtn').addEventListener('click', feedPet);
    document.getElementById('playBtn').addEventListener('click', playWithPet);
    document.getElementById('sleepBtn').addEventListener('click', sleepPet);

    updatePetDisplay();

    function decreaseFactors() {
        setInterval(() => {
            pet.hunger += 1;
            pet.happiness -= 1;
            pet.energy -= 1;
            if (pet.hunger > 100) pet.hunger = 100;
            if (pet.happiness < 0) pet.happiness = 0;
            if (pet.energy < 0) pet.energy = 0;
            updatePetDisplay();
        }, 1000);
    }

    decreaseFactors();
});
