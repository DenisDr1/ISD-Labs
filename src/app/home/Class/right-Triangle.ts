import { Triangle } from "./triangle";
import { Point } from "./point";

export class RightTriangle extends Triangle {
    constructor (vertices: Point[], color: string) {
        super(vertices, color);
        if(!this.isRight()) throw new Error('Це не є прямокутний трикутник');
    }

    isRight() {
        let [vertex1, vertex2, vertex3] = this.vertices;

        let side1 = vertex1.getDistance(vertex2), 
        side2 = vertex2.getDistance(vertex3), 
        side3 = vertex3.getDistance(vertex1);

        let hypotenuse = Math.max(side1, side2, side3);
        let leg1 = Math.min(side1, side2, side3);
        let leg2 = (side1 !== hypotenuse)? side1 : (side2 !== hypotenuse)? side2 : side3;

        return parseFloat(Math.sqrt(leg1 * leg1 + leg2 * leg2).toFixed(1)) == parseFloat(hypotenuse.toFixed(1));
    }

    override setCoordinatesOfVertex(num: number, vertex: Point) {
        this.vertices[num] = vertex;
        if(!this.isRight()) console.log('Це не є прямокутний трикутник');
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
        if(!this.isRight()) throw new Error('Це не є прямокутний трикутник');
    }
}