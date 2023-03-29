class DrawableObject {
   
    img;
    imgCache = {};
    currentImg = 0;
    x;
    y;
    height = 400;
    width = 180;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    };


    loadArray(array) {
        array.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imgCache[path] = img;
        });
    };


    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
};