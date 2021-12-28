import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe('Pruebas en 05-funciones', () => {
    test('getUser debe retornar objeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();
        expect (user).toEqual(userTest); 

    }); 

    test('getusuarioActivo debe retornar objeto', () => {
       const usernameTest = 'Cesar Lopez';
       
       const usuarioActivoTest = {
            uid: 'ABC567',
            username: usernameTest
       }

       const usuarioActivo = getUsuarioActivo(usernameTest);

       expect(usuarioActivo).toEqual(usuarioActivoTest);
    });
    
});
