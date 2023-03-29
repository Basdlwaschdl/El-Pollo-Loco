class Background extends MoveObject {
    
    constructor(Path, x, y) {
       
        super().loadImage(Path);
        this.x = x;
        this.y = y;
        this.height = 720;
        this.width = 1280;
    }
}
