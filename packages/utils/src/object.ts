type Object = { [key: string]: any };
type ValueCallback = (key: string, value: any) => void;
type BooleanCallback = (key: string, value: any) => boolean;

const map = (object: Object, fn: ValueCallback) => {
  const updated = {};

  Object.entries(object).forEach(([key, value]) => {
    updated[key] = fn(key, value);
  });

  return updated;
};

const filter = (object: Object, fn: BooleanCallback) => {
  const updated = {};

  Object.entries(object).forEach(([key, value]) => {
    if (fn(key, value)) {
      updated[key] = value;
    }
  });

  return updated;
};

const some = (object: Object, fn: BooleanCallback = (_, v) => v) => {
  let result = false;

  Object.entries(object).forEach(([key, value]) => {
    if (fn(key, value)) {
      result = true;
    }
  });

  return result;
};

const every = (object: Object, fn: BooleanCallback = (_, v) => v) => {
  let result = true;

  Object.entries(object).forEach(([key, value]) => {
    if (!fn(key, value)) {
      result = false;
    }
  });

  return result;
};

export default { map, filter, some, every };
