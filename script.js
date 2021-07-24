document.addEventListener('DOMContentLoaded', () => {

    const button = document.querySelector('.beer-button');
    const randomBeerEl = document.querySelector('.random-beer');
    const descriptionEl = document.querySelector('.description');

    const getBeer = () => {
        fetch('https://api.punkapi.com/v2/beers/random')
            .then(response => {
                return response.json()
            })
            .then(data => {
                const { name, description, volume } = data[0];
                const { value, unit } = volume;   
                console.log(1)

                randomBeerEl.innerHTML = `${name} ${value} ${unit}`;
                descriptionEl.innerHTML = description;
            }).catch(ex => {
                console.log(ex)
            })
    };

    button.addEventListener('click', () => getBeer());
})