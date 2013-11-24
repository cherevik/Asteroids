var BlasterBolt = Entity.extend({
    radius: 3, 
    
    init: function(game, x, y) {
        this._super(game, x, y); 
    },
    
    update: function() {
        this._super(); 
        this.y = this.y - 4; 
        if (this.y < 0) {
            // see if it is outside of the gameboard 
            this.deleted = true;
        } else {
            // check if it hit something 
            for (var i = 0; i < this.game.entities.length; i ++) {
                var e = this.game.entities[i]; 
                if (e === this) {
                    continue;
                }
                var hw = e.getWidth()/2; 
                var hh = e.getHeight()/2;
                if (this.x > e.x - hw && this.x < e.x + hw && 
                    this.y < e.y + hh && this.y > e.y - hh && 
                    e.hasExploded() === false) {
                    // we have an impact 
                    e.explode(); 
                    this.deleted = true;
                }
            }
        }
    },
    
    draw: function() {
        this._super();
        var ctx = this.game.getContext(); 
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.beginPath();
        ctx.arc(0, 0, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = "#ff0000";
        ctx.fill();
        ctx.restore();
    },
    
    getWidth: function() {
        return this.radius*2; 
    }, 
    
    getHeight: function() {
        return this.radius*2; 
    }
    
});


