type Constructor<T = any> = new (...args: any[]) => T;

function PartialType<T extends Constructor>(BaseClass: T) {
  class PartialClass extends (BaseClass as Constructor) {}

  type Keys = keyof InstanceType<T>;
  (Object.keys(new BaseClass()) as Keys[]).forEach(() => {});

  return PartialClass as {
    new (): { [K in keyof InstanceType<T>]?: InstanceType<T>[K] };
  };
}
