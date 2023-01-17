type TObjectKey = string | number | symbol;

export const eliminateUndefinedKeys = (record: Record<TObjectKey, unknown>) => {
  const keys = Object.keys(record);
  const eliminated: Record<TObjectKey, unknown> = {};
  for (const key of keys) {
    const value = record[key];
    if (value !== undefined) {
      eliminated[key] = value;
    }
  }
  return eliminated;
};
