<<<<<<< HEAD
console.log("hoi");
const config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 800,
    height: 640,
    scale: {
        mode: Phaser.scale.RESIZE,
        autoCenter: Phaser.scale.CENTER_BOTH
    },
    scene:{
        preload,
        create,
        update
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: false
        }
    }
};

const game = new Phaser.game(config);

function preload(){

}

function create(){

}

function update(){

=======
const config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 800,
    height: 640,
    scale: {
        mode: Phaser.scale.RESIZE,
        autoCenter: Phaser.scale.CENTER_BOTH
    },
    scene:{
        preload,
        create,
        update
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: false
        }
    }
};

const game = new Phaser.game(config);

function preload(){

}

function create(){

}

function update(){

>>>>>>> origin/main
}