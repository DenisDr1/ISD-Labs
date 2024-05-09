import { Point } from "./point";

describe('Point', () => {
    let point: Point;
    beforeEach(() => 
    {   
        point = new Point(0, 1);
    }
    );
    
    fit('Створення екземпляру класу', () => {
        expect(point).toBeTruthy();
    });

    fit('Переміщення точки при x = 1, y = 3', () => {
        let x = 1, y = 3;
        let xNew = 1, yNew = 4;
        point.move(x, y);
        expect(point.getCoordinates()).toEqual([xNew, yNew]);
    });

    fit('Обертання точки навколо початку координат на Math.PI / 4', () => {
        let theta = Math.PI / 4;
        let xNew = point.x * Math.cos(theta) - point.y * Math.sin(theta), 
        yNew = point.x * Math.sin(theta) + point.y * Math.cos(theta);
        point.rotate(theta);
        expect(point.getCoordinates()).toEqual([parseFloat(xNew.toFixed(2)), parseFloat(yNew.toFixed(2))])
    });

    fit('Обретання точки навколо іншої точки з координатами (3;3) на Math.PI / 4', () => {
        let x = 3, y = 3, newPoint = new Point(x, y), theta = Math.PI / 4;
        
        let xNew, yNew;
        let pointX = point.x, pointY = point.y;

        xNew = x + (pointX - x) * Math.cos(theta) - (pointY - y) * Math.sin(theta);
        yNew = y + (pointX - x) * Math.sin(theta) + (pointY - y) * Math.cos(theta);

        point.rotateAroundPoint(newPoint, theta);
        expect(point.getCoordinates()).toEqual([parseFloat(xNew.toFixed(2)), parseFloat(yNew.toFixed(2))]);
    });

    fit('Отримання відстані між даною точкою та точкою з координатами (4; 5)', () => {
        let x = 4, y = 5, newPoint = new Point(x, y);
        let distance = Math.sqrt((x - point.x)*(x - point.x) + (y- point.y)*(y - point.y));
        expect(point.getDistance(newPoint)).toBe(parseFloat(distance.toFixed(2)));
    });
});