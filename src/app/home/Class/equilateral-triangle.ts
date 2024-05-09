import { Triangle } from "./triangle";
import { Point } from "./point";

export class EquilateralTriangle extends Triangle {
    constructor (vertices: Point[], color: string) {
        super(vertices, color);
        if(!this.isEquilateral()) throw new Error('Це не є рівносторонній трикутник');
    }

    isEquilateral() {
        let [vertex1, vertex2, vertex3] = this.vertices;
        
        let distance1 = vertex1.getDistance(vertex2), 
        distance2 = vertex2.getDistance(vertex3), 
        distance3 = vertex3.getDistance(vertex1);

        return distance1 == distance2 && distance2 == distance3 && distance1 != 0;
    }

    override setCoordinatesOfVertex(num: number, vertex: Point) {
        this.vertices[num] = vertex;
        if (!this.isEquilateral()) console.log('Це не є рівносторонній трикутник');
    }

    override resize(newVertex1: any, newVertex2: any, newVertex3: any) {
        if(newVertex1 instanceof Point) {
            this.setCoordinatesOfVertex(0, newVertex1);
        }

        if(newVertex2 instanceof Point) {
            this.setCoordinatesOfVertex(1, newVertex2);
        }

        if(newVertex3 instanceof Point) {
            this.setCoordinatesOfVertex(2, newVertex3);
        }
        if(!this.isEquilateral()) throw new Error('Це не є рівносторонній трикутник');
    }
}