export class Point {
    x: number;
    y: number;
    constructor (x: number, y:number) {
        this.x = x;
        this.y = y;
    }

    move(x: number, y: number) {
        this.x += x;
        this.y += y;
    }

    getCoordinates() {
        return [this.x, this.y];
    }

    rotate(theta: number) {
        let xNew = this.x * Math.cos(theta) - this.y * Math.sin(theta);
        let yNew = this.x * Math.sin(theta) + this.y * Math.cos(theta);
        
        this.x = parseFloat(xNew.toFixed(2));
        this.y = parseFloat(yNew.toFixed(2));
    }

    rotateAroundPoint(point: Point, theta: number) {
        this.x -= point.x;
        this.y -= point.y;

        this.rotate(theta);

        this.x += point.x;
        this.y += point.y;
    }

    getDistance(point: Point) {
        return parseFloat(Math.sqrt((point.x - this.x)*(point.x - this.x) + (point.y - this.y)*(point.y - this.y)).toFixed(2));
    }
}