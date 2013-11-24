var Entity = Class.extend({
    x: 0, 
    y: 0, 
    game: null, 
    deleted: false,
    
    init: function(game, x, y) {
        this.game = game; 
        this.x = x; 
        this.y = y; 
    },
    
    draw: function() {
        /*
        ctx.beginPath();
        ctx.arc(0, 0, 3, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = "#ff0000";
        ctx.fill();
        */
    },
    
    update: function() {
    }, 
    
    isDeleted: function() {
        return this.deleted; 
    }
});

