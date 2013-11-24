var Game = Class.extend({

    width: 0, 
    height: 0, 
    
    // objects we have in the game 
    spaceship: null, 
    entities: [], 
    
    // the game loop
    gameLoop: null,
    
    init: function(canvas) {
        this.canvas = canvas; 
        this.width = parseInt(canvas.getAttribute("width")); 
        this.height = parseInt(canvas.getAttribute("height")); 
        
        var self = this;
        this.gameLoop = setInterval(function() {
            self.doGameLoop();
        }, 16);
        
        this.spawnSpaceship();
        this.spawnAsteroids();
        
        window.addEventListener('keydown', function(evt) {
            self.onKeyDown(evt);
        }, true);        
    }, 
    
    draw: function() {
        var ctx = this.getContext(); 
        ctx.clearRect(0, 0, this.width, this.height);
        for (var i = 0; i < this.entities.length; i ++) {
            var e = this.entities[i]; 
            e.draw(); 
        }
    }, 
    
    getContext: function() {
        return this.canvas.getContext("2d");
    }, 
    
    doGameLoop: function() {
        for (var i = 0; i < this.entities.length; i++) {
            var e = this.entities[i];
            e.update(); 
        }

        this.collideWith();
        
        var len = this.entities.length; 
        while (len --) {
            var e = this.entities[len];
            if (e.isDeleted()) {
                this.entities.splice(len, 1); 
            }
        }
        
        var self = this;
        window.requestAnimationFrame(function() {
            self.draw();
        });
    }, 
    
    gameOver: function() {
        clearTimeout(this.gameLoop);        
    }, 

    spawnAsteroids: function() {
        var self = this;
        setTimeout(function() {
            self.doSpawnAsteroids();
        }, Math.floor(Math.random() * 3000));        
    },
    
    doSpawnAsteroids: function() {
        var ex = this.spaceship.getWidth()/2 + Math.floor(Math.random() * (this.width - this.spaceship.getWidth()));
        var e = new Asteroid(this, ex, 0); 
        this.entities.push(e); 
        this.spawnAsteroids();
    },
    
    spawnSpaceship: function() {
        this.spaceship = new Spaceship(this, this.width/2, this.height-60);
        this.entities.push(this.spaceship); 
    }, 
    
    spawnBlasterBolt: function() {
        var x = this.spaceship.x; 
        var y = this.spaceship.y - this.spaceship.getHeight()/2;
        var bb = new BlasterBolt(this, x, y); 
        this.entities.push(bb); 
    },
    
    collideWith: function() {
        for(var i = 1; i < this.entities.length; i++){
            if(this.entities[i].y > this.spaceship.y){
                this.entities[i].explode();
            }
        }
       
    },
    
    onKeyDown: function(evt) {
        switch (evt.keyCode) {
            case 37: 
                this.spaceship.moveLeft(); 
                break;
            case 39: 
                this.spaceship.moveRight(); 
                break; 
            case 32: 
                this.spawnBlasterBolt(); 
                break;
            case 38:
                this.spaceship.moveUp();
                break;
            case 40:
                this.spaceship.moveDown();
        }
    }
});




