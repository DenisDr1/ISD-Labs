import { Point } from "./point";
import { RightTriangle } from "./right-Triangle";

describe('Right Triangle', () => {
    let rightTriangle: RightTriangle;

    beforeEach(() => {
        let vertex1 = new Point(0, 0), vertex2 = new Point(0, 3), vertex3 = new Point(2, 0);
        let vertices = [vertex1, vertex2, vertex3];
        rightTriangle = new RightTriangle(vertices, 'white');
    });

    fit('Створення екземпляру класу', () => {
        expect(rightTriangle).toBeTruthy();
    });

    fit('Створення екземпляру класу із помилковими даними: (0;0), (2;2), (2;1)', () => {
        let vertex1 = new Point(0, 0), vertex2 = new Point(2, 2), vertex3 = new Point(2, 1);
        let vertices = [vertex1, vertex2, vertex3];
        expect(() => new RightTriangle(vertices, 'white')).toThrow(new Error('Це не є прямокутний трикутник'));
    });

    fit('Встановлення нових значень координат для першої вершини: (3; 3)', () => {
        spyOn(console, 'log');
        rightTriangle.setCoordinatesOfVertex(0, new Point(3, 3));
        expect(console.log).toHaveBeenCalledWith('Це не є прямокутний трикутник');
    });

    fit('Зміна розмірів трикутника', () => {
        let newVertex1 = new Point(0, 0), newVertex2 = new Point(2, 2), newVertex3 = new Point(2, 1);
        expect(() => rightTriangle.resize(newVertex1, newVertex2, newVertex3)).toThrow(new Error('Це не є прямокутний трикутник'));
    });
});