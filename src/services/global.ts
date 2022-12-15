global.test = (desc: string, testCall: () => void) => {
  try {
    testCall();
    console.log(`✓ ${desc}`);
  } catch (error) {
    console.log(`✕ ${desc}`);
    console.error(error);
  }
};

global.expect = (recebido: any) => ({
  toEqual: (experado: any) => {
    if (recebido !== experado) {
      throw new Error(`
            Recebido: ${recebido}
            Esperado: ${experado}
            `);
    }
  },
  toCalledWith: (experado: any) => {
    if (JSON.stringify(recebido.mock.calls) !== JSON.stringify(experado)) {
      throw new Error(`
        Recebido: ${JSON.stringify(recebido.mock.calls)}
        Esperado: ${JSON.stringify(experado)}
        `);
    }
  },
  toCalledWithNth: (experado: any, pos: number) => {
    if (
      JSON.stringify(recebido.mock.calls[pos - 1]) !== JSON.stringify(experado)
    ) {
      throw new Error(`
        Recebido: ${JSON.stringify(recebido.mock.calls[pos - 1])}
        Esperado: ${JSON.stringify(experado)}
        `);
    }
  },
});
