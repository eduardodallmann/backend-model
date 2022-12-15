export {};

declare global {
  function test(desc: string, testCall: () => void): void;
  function expect(recebido: any): {
    toEqual: (experado: any) => void;
    toCalledWith: (experado: any) => void;
    toCalledWithNth: (experado: any, pos: number) => void;
  };
}
