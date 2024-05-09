import { Point } from "./point";

export class Triangle {
    constructor (public vertices: Point[], public color: string) { 
        if(!this.isTriangle()) throw new Error('Це не є трикутник');
    }

    isTriangle() {
        let [vertex1, vertex2, vertex3] = this.vertices;
        
        let distance1 = vertex1.getDistance(vertex2), 
        distance2 = vertex2.getDistance(vertex3), 
        distance3 = vertex3.getDistance(vertex1);

        return  distance1 + distance2 > distance3 
                && distance2 + distance3 > distance1 
                && distance1 + distance3 > distance2;
    }

    setCoordinatesOfVertex(num: number, vertex: Point) {
        this.vertices[num] = vertex;
        if(!this.isTriangle()) throw new Error('Це не є трикутник');
    }

    getCoordinatesOfVertices() {
        let arr: number[][] = [];
        for (let vertex of this.vertices) {
            arr.push(vertex.getCoordinates());
        }
        return arr;
    }

    move(num: number) {
        for (let vertex of this.vertices){
            vertex.move(num, num);
        }
    }

    resize(newVertex1: any, newVertex2: any, newVertex3: any) {
        if(newVertex1 instanceof Point) {
            this.setCoordinatesOfVertex(0, newVertex1);
        }

        if(newVertex2 instanceof Point) {
            this.setCoordinatesOfVertex(1, newVertex2);
        }

        if(newVertex3 instanceof Point) {
            this.setCoordinatesOfVertex(2, newVertex3);
        }
    }

    setColor(color: string) {
        this.color = color;
    }

    getColor() {
        return this.color;
    }

    rotate(point: Point, theta: number) {
        for (let vertex of this.vertices) {
            vertex.rotateAroundPoint(point, theta);
        }
    }
}