document.addEventListener('DOMContentLoaded', () => {
    fetch('js/data/bigCats.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => new Table(data, 'bigCatsTable', ['name', 'size', 'location', 'image']))
        .catch(error => console.error('There was a problem with the fetch operation for bigCats:', error));

    fetch('js/data/dogs.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => new Table(data, 'dogsTable', ['name', 'size', 'location', 'image']))
        .catch(error => console.error('There was a problem with the fetch operation for dogs:', error));

    fetch('js/data/bigFish.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => new Table(data, 'bigFishTable', ['name', 'size', 'location', 'image']))
        .catch(error => console.error('There was a problem with the fetch operation for bigFish:', error));
});
