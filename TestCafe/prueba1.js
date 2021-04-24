import pagina from './pageObjectModel'

fixture('Mis primeras pruebas en testCafe')
    .page('https://devexpress.github.io/testcafe/example/');

test('Probar que la página abra correctamente', async t =>{
        await t
    });

test('Probar que la página escribe el nombre del dev', async t =>{
    await t
    .typeText(pagina.nameDev,'Cecilia R')
    .expect(pagina.nameDev.value).eql('Cecilia R')
});


test('Probar que se puede seleccionar un checkbox', async t=>{
    await t
    .click(pagina.checkboxRemoTest)
    .expect(pagina.checkboxRemoTest.checked).ok();
});


test('Probar que se puede selecciona radio Linux', async t => {
    await t
    .click(pagina.radioButtonLinux)
    .expect(pagina.radioButtonLinux.checked).ok();
});

test('Probar que se puede selecciona un elemento de una lista', async t => {
    await t
    .click(pagina.listaInterface)
    .click(pagina.elementJavascriptApi)
    .expect(pagina.elementJavascriptApi.value).ok()
    .expect(pagina.elementJavascriptApi.selected).ok()
});

test('Probar que se escribir en el area de coments', async t => {
    await t
    .click(pagina.checkBoxTriedTc)
    .typeText(pagina.textArea,'Algo test cafe',{speed: 0.1})
    .typeText(pagina.textArea,'\n salto de línea')
    .typeText(pagina.textArea,'Ahora--',{replace: true,speed: 0.1})
    .expect(pagina.textArea.value).eql('Ahora--')
});

test('Probar mover slider', async t=>{
    await t
    .click(pagina.checkBoxTriedTc) 
    .expect(pagina.checkBoxTriedTc.checked).ok()

    .dragToElement(pagina.slider.handle, pagina.slider.tick.withText('9'),{speed: 0.1})
});