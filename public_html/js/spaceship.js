var Spaceship = Entity.extend({
    image: null, 
    distance: 10,
    
    init: function(game, x, y) {
        this._super(game, x, y); 
        this.image = new Image();
        this.image.src = "img/spaceship.png";
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
        if(this.y + this.distance + this.image.height/2 < this.game.height){
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
    }
});



