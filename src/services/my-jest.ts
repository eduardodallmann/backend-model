class MyJest {
  mock: { calls: any[] } = { calls: [] };

  private callback = () => {};

  private countFn = (...args: any[]) => {
    this.callback();
    this.mock.calls.push(args);
  };

  private imported: any;

  private funcName: string;

  mockImplementation(callback: (...args: any[]) => void) {
    this.callback = callback;
    this.imported[this.funcName] = this.countFn.bind(callback);

    return this;
  }

  constructor(imported: any, funcName: string) {
    this.imported = imported;
    this.funcName = funcName;
    this.imported[this.funcName] = this.callback;
  }
}

function fn() {
  // return new MyJest();
}

function spyOn(imported: any, funcName: string): MyJest {
  return new MyJest(imported, funcName);
}

export default { fn, spyOn };
