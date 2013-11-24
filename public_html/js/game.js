var Game = Class.extend({

    width: 0, 
    height: 0, 
    
    // objects we have in the game 
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
        var ex = Math.floor(Math.random() * (this.width - 40));
        var e = new Asteroid(this, ex + 20, 0); 
        this.entities.push(e); 
        this.spawnAsteroids();
    },
    
    spawnSpaceship: function() {
        var s = new Spaceship(this, this.width/2, this.height-60);
        this.entities.push(s); 
    }
});




