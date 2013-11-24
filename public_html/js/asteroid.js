var Asteroid = Entity.extend({
    angle: 0,
    angleSpeed: 0.3,
    image: null, 
    
    init: function(game, x, y) {
        this._super(game, x, y); 
        this.angleSpeed = Math.random() * 0.3 - 0.15;
        this.image = new Image();
        this.image.src = "img/asteroid.png";
    },
    
    update: function() {
        this._super();
        this.angle = (this.angle + this.angleSpeed) % (Math.PI*2);
        this.y = this.y + 1; 
        if (this.y > this.game.height) {
            this.deleted = true;
        }
    }, 
    
    draw: function() {
        this._super(); 
        var ctx = this.game.getContext(); 
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.drawImage(this.image, -this.image.width/2, -this.image.height/2);
        ctx.restore();
    }
});

