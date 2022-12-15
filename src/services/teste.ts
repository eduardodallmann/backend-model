import { minhaFuncao } from './minha-fnc';
import * as service from './service';
import jest from './my-jest';

require('./global');

global.test('meu teste feito', () => {
  // mock
  const mockado = jest.spyOn(service, 'service').mockImplementation(() => {
    console.log('mock no teste');
  });

  // execução
  minhaFuncao('oie');

  global.expect(mockado).toCalledWithNth(['oie'], 1);
});

// asserts
