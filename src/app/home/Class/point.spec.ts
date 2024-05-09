

describe('Point', () => {
    let point: Point;
    beforeEach(() => 
    {   
        point = new Point(0, 1);
    }
    )
    fit('Створення екземпляру класу', () => {
        expect(point).toBeTruthy();
    })
});