test('Validar Hola Mundo',()=>{
    const hola = 'Hello w';
    expect(hola).toBe('Hello w');


});

test('Validando objetos', ()=>{
    const obj1 = {uno: 1};
    obj1['dos'] = 2;
    expect(obj1).toEqual({uno:1, dos:2})
});

test('Probar un for', ()=> {
    for(var i=0; i<10; i++){
        for(var j=1;j<10;j++){
            expect(i+j).not.toBe(0);
        }
    }
});

test ('Validar una suma',() =>{
    var resultado = 3+9;
    expect(resultado).toBe(12);
});

test ('Validar una resta',() =>{
    var resta = 8-4;
    expect(resta).toEqual(4);
    expect(resta).not.toEqual(5);
});

test ('Validar mayor que',() =>{
    const mayor = 3*4;
    expect(mayor).toBeGreaterThan(10);
    expect(mayor).toBeGreaterThanOrEqual(12);
});

test ('Validar menor que', ()=> {
    const menor = 6-4;
    expect(7-6).toEqual(1);
    expect(menor).toBeLessThan(3);
    expect(menor).toBeLessThanOrEqual(2);
});

test ('Validar flotante', ()=> {
    const flota = 0.1 +0.3;
    expect(flota).toBeCloseTo(0.4);
});

test ('Validar que la cadena no contiene I', ()=> {
    expect('team').not.toMatch(/I/);
});

test('Validar que contiene la palabra stop', () =>{
    expect('Christopeher').toMatch(/stop/);
    expect('Christopeher').toContain('stop');
});

const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'beer',
  ];

  test('the shopping list has beer on it', () => {
    expect(shoppingList).toContain('beer');
    expect(shoppingList).not.toContain('Cereal');
    expect(new Set(shoppingList)).toContain('beer');
  });

  test('Admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).not.toContain('Yuri');
  });

  test('Validar un valor nulo', () =>{
    const n= null;
    const z =0;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();

    expect(z).not.toBeNull();
    expect(z).not.toBeUndefined();

  });

  //Tarea 9 : Agregar 5 pruebas mas usando mandos mas expects que no sean Tobe.