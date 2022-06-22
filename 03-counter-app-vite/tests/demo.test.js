
describe('Pruebas en <DemoComponent />', () => {  


test('Esta prueba no debe de fallar', ()=>{
    
        // Las AAA
        // 1. Arrange (Preparar el entorno de testing)
        const messageOne = 'Hola Mundo';

        // 2. Act (Estimular el sujeto de pruebas)
        const messageTwo = messageOne.trim() //(.trim es para quitar los espacios en blanco de delante y atrás)

        // 3. Assert (Observar el comportamiento esperado)
        expect( messageOne ).toBe( messageTwo ); //Esta linea de código es para igualar nuestros 2 mensajes
})

})