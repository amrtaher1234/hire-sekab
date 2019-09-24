export default class Skill {
    constructor(src, ctx) {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * -10;
        this.velocityX = Math.random() * 6;
        this.velocityY = Math.random() * 6;
        this.src = src;
        this.ctx = ctx;
        this.imgTag = new Image();
        this.imgTag.src = this.src;
        // initiate 
    }
    draw() {
        this.ctx.drawImage(this.imgTag, this.x, this.y);
    }
    move() {
        this.x += this.velocityX;
        this.y += this.velocityY;
    }
    debounce() {
        if (this.x >= window.innerWidth - 100 || this.x <= 0) {
            this.velocityX *= -1;
        }
        if (this.y >= window.innerHeight - 100 || this.y <= -11) {
            this.velocityY *= -1;
        }
    }
    resetValues() {
        this.velocityX = Math.random() * 6;
        this.velocityY = Math.random() * 6;
    }
    // checks if it is out to re-initiate newer ones.
    isOut() {
        if (true) {
            return true;
        }
    }
}