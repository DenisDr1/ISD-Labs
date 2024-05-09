import { Point } from "./point";
import { EquilateralTriangle } from "./equilateral-triangle";

describe('Equilateral Triangle', () => {
    let equilateralTriangle: EquilateralTriangle;

    beforeEach(() => {
        let vertex1 = new Point(0, 2), vertex2 = new Point(1.732, -1), vertex3 = new Point(-1.732, -1);
        let vertices = [vertex1, vertex2, vertex3];
        equilateralTriangle = new EquilateralTriangle(vertices, 'white');
    });

    fit('Створення екземпляру класу', () => {
        expect(equilateralTriangle).toBeTruthy();
    });

    fit('Створення екземпляру класу із помилковими даними: (0;0), (2;2), (2;1)', () => {
        let vertex1 = new Point(0, 0), vertex2 = new Point(2, 2), vertex3 = new Point(2, 1);
        let vertices = [vertex1, vertex2, vertex3];
        expect(() => new EquilateralTriangle(vertices, 'white')).toThrow(new Error('Це не є рівносторонній трикутник'));
    });

    fit('Встановлення нових значень координат для першої вершини: (3; 3)', () => {
        spyOn(console, 'log');
        equilateralTriangle.setCoordinatesOfVertex(0, new Point(3, 3));
        expect(console.log).toHaveBeenCalledWith('Це не є рівносторонній трикутник');
    });

    fit('Зміна розмірів трикутника', () => {
        let newVertex1 = new Point(0, 0), newVertex2 = new Point(2, 2), newVertex3 = new Point(2, 1);
        expect(() => equilateralTriangle.resize(newVertex1, newVertex2, newVertex3)).toThrow(new Error('Це не є рівносторонній трикутник'));
    });
});