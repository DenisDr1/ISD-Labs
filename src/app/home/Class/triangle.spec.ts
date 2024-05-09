import { Point } from "./point";
import { Triangle } from "./triangle";

describe('Triangle', () => {
    let triangle: Triangle;

    beforeEach(() => {
        let vertex1 = new Point(0, 0), vertex2 = new Point(2, 2), vertex3 = new Point(3, 0);
        let vertices = [vertex1, vertex2, vertex3]
        triangle = new Triangle(vertices, 'white');
    });

    fit('Створення екземпляру класу', () => {
        expect(triangle).toBeTruthy();
    });

    fit('Створення фігури, що не є трикутником, із довжинами сторін 1, 1, 3', () =>{
        let vertex1 = new Point(0, 0), vertex2 = new Point(1, 0), vertex3 = new Point(3, 0);
        expect(() => new Triangle([vertex1, vertex2, vertex3], 'white')).toThrow(new Error('Це не є трикутник'));
    });

    fit('Отримання координат вершин', () =>{
        expect(triangle.getCoordinatesOfVertices()).toEqual([[0, 0], [2, 2], [3, 0]]);
    });

    fit('Переміщення кожної вершини на 2', () => {
        triangle.move(2);
        expect(triangle.getCoordinatesOfVertices()).toEqual([[2, 2], [4, 4], [5, 2]]);
    });

    fit('Встановлення нових значень координат для першої вершини: (3; 3)', () => {
        triangle.setCoordinatesOfVertex(0, new Point(3, 3));
        expect(triangle.getCoordinatesOfVertices()).toEqual([[3, 3], [2, 2], [3, 0]]);
    });

    fit('Встановлення нових значень координат для третьої вершини: (2; 2)', () => {
        expect(() => triangle.setCoordinatesOfVertex(2, new Point(2, 2))).toThrow(new Error('Це не є трикутник'));
    });

    fit('Зміна розмірів шляхом оновлення координат вершин трикутника(для другої (3, 3) та третьої вершини (3, 1))', () => {
        let newVertex2 = new Point(3, 3), newVertex3 = new Point(3, 1)
        triangle.resize(0, newVertex2, newVertex3);
        expect(triangle.getCoordinatesOfVertices()).toEqual([[0, 0], [3, 3], [3, 1]]);
    });

    fit('Зміна з білого на червоний', () => {
        triangle.setColor('red');
        expect(triangle.getColor()).toBe('red');
    });

    fit('Обертання навколо точки з координатам (1;1) на Math.PI / 4', () => {
        let point = new Point(1, 1), theta = Math.PI / 4;
        let pointX = 1, pointY = 1;
        const x1 = 0, y1 = 0, x2 = 2, y2 = 2, x3 = 3, y3 = 0;

        let newX1 = pointX + (x1 - pointX) * Math.cos(theta) - (y1 - pointY) * Math.sin(theta);
        newX1 = parseFloat(newX1.toFixed(2));
        let newY1 = pointY + (x1 - pointX) * Math.sin(theta) + (y1 - pointY) * Math.cos(theta);
        newY1 = parseFloat(newY1.toFixed(2));

        let newX2 = pointX + (x2 - pointX) * Math.cos(theta) - (y2 - pointY) * Math.sin(theta);
        newX2 = parseFloat(newX2.toFixed(2));
        let newY2 = pointY + (x2 - pointX) * Math.sin(theta) + (y2 - pointY) * Math.cos(theta);
        newY2 = parseFloat(newY2.toFixed(2));

        let newX3 = pointX + (x3 - pointX) * Math.cos(theta) - (y3 - pointY) * Math.sin(theta);
        newX3 = parseFloat(newX3.toFixed(2));
        let newY3 = pointY + (x3 - pointX) * Math.sin(theta) + (y3 - pointY) * Math.cos(theta);
        newY3 = parseFloat(newY3.toFixed(2));

        triangle.rotate(point, theta)
        //expect(triangle.getCoordinatesOfVertices()).toEqual([[newX1,newY1], [newX2, newY2], [newX3, newY3]]);
        expect(triangle.getCoordinatesOfVertices()[0][0]).toBeCloseTo(newX1, 2);
        expect(triangle.getCoordinatesOfVertices()[0][1]).toBeCloseTo(newY1, 2);
        expect(triangle.getCoordinatesOfVertices()[1][0]).toBeCloseTo(newX2, 2);
        expect(triangle.getCoordinatesOfVertices()[1][1]).toBeCloseTo(newY2, 2);
        expect(triangle.getCoordinatesOfVertices()[2][0]).toBeCloseTo(newX3, 2);
        expect(triangle.getCoordinatesOfVertices()[2][1]).toBeCloseTo(newY3, 2);
    });

});