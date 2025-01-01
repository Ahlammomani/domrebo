const Afruits = ['apple', 'banana', 'cherry', 'Strawberry', 'orange'];

const fruitList = document.getElementbyid('fruit')

Afruits.forEach(fruit => {
    const listItem = document.createElement('li');
    const img = document.createElement('img');
    img.src = fruitImages[fruit.toLowerCase()];
    img.alt = fruit;

    const caption = document.createElement('p');
    caption.textContent = fruit.charAt(0).toUpperCase() + fruit.slice(1);


    listItem.appendChild(img);
    listItem.appendChild(caption);


    fruitList.appendChild(listItem);
});

const fruitImages = {
    apple: "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg",
    banana: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg",
    cherry: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Cherry_Stella444.jpg",
    grape: "https://upload.wikimedia.org/wikipedia/commons/3/36/Kyoho-grape.jpg",
    orange: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg"
};