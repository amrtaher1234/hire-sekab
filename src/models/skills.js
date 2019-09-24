export default class Skill {
    constructor(src, ctx) {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
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
        // this.ctx.font = "20px Poppins";
        // this.ctx.fillText("Hello World", this.x, this.y);
        // this.ctx.fillStyle = 'white';
    }
    move() {
        this.x += this.velocityX;
        this.y += this.velocityY;
    }
    debounce() {
        if (this.x >= window.innerWidth  || this.x <= 0) {
            this.velocityX *= -1;
        }
        if (this.y >= window.innerHeight  || this.y <= -11) {
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