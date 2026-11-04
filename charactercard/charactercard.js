const aCharacter = {
    name: 'Snortleblat',
    class: 'Swamp Beast Diplomat',
    level: 5,
    health: 100,
    image: 'character.png',
    attacked: function() {
        if (this.health > 0) {
            this.health -= 20;
            document.querySelector('#health').textContent = "Health: " + this.health;
        }
        else if (this.health <= 0) {
            this.health = 0;
            document.querySelector('#health').textContent = "Health: 0";
            alert("Character Died");
        }
    },
    levelUp: function() {
        this.level++;
        document.querySelector('#level').textContent = "Level: " + this.level;
    }
}

document.querySelector('img').setAttribute('src', aCharacter.image);
document.querySelector('img').setAttribute('alt', aCharacter.name);

document.querySelector('.name').textContent = aCharacter.name;
document.querySelector('#class').textContent = "Class: " + aCharacter.class;
document.querySelector('#level').textContent = "Level: " + aCharacter.level;
document.querySelector('#health').textContent = "Health: " + aCharacter.health;

// Listens for when the user presses the "Level Up" button. This will increase the level by one.
document.querySelector('#levelUpSelect').addEventListener('click', () => {
    aCharacter.levelUp();
});


document.querySelector('#attackSelect').addEventListener('click', () => {
    aCharacter.attacked();
});