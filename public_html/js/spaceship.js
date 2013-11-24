var Spaceship = Entity.extend({
    image: null, 
    distance: 10,
    ammoCount: 25,
   
        
    init: function(game, x, y) {
        this._super(game, x, y); 
        this.image = new Image();
        this.image.src = "img/spaceship.png";
         var ammoElem = document.getElementById('ammoCount');
        ammoElem.innerHTML = this.ammoCount;
      
    },
    
    draw: function() {
        this._super(); 
        var ctx = this.game.getContext(); 
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.drawImage(this.image, -this.image.width/2, -this.image.height/2);
        ctx.restore();
    }, 
    
    moveLeft: function() {
        if (this.x - this.distance - this.image.width/2 > 0) {
            this.x = this.x - this.distance;
        }
    }, 
    
    moveRight: function() {
        if (this.x + this.distance + this.image.width/2 < this.game.width) {
            this.x = this.x + this.distance;
        }
    }, 
    moveUp: function() {
        if(this.y - this.distance - this.image.height/2 > 0){
            this.y = this.y - this.distance;
        }
    },
    moveDown: function() {
        if(this.y + this.distance + this.image.height/2 < this.game.height){
            this.y = this.y + this.distance;
        }
    },
    
    getWidth: function() {
        return this.image ? this.image.width : 0; 
    }, 
    
    getHeight: function() {
        return this.image ? this.image.height : 0; 
    }, 
    
    hasAmmo: function() {
        return this.ammoCount > 0;
    },
    
    useAmmo: function() {
        this.ammoCount --;
        var ammoElem = document.getElementById('ammoCount');
        ammoElem.innerHTML = this.ammoCount;
    }
});



