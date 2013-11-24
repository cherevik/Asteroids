var Spaceship = Entity.extend({
    image: null, 
    
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
    }
    
});



