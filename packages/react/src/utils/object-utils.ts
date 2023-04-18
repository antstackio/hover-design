type TObjectKey = string | number | symbol;

export const eliminateUndefinedKeys = (record: Record<TObjectKey, unknown>) => {
  const keys = Object.keys(record);
  const eliminated: Record<string, string> = {};
  for (const key of keys) {
    const value = record[key];
    if (value !== undefined) {
      eliminated[key] = value as unknown as string;
    }
  }
  return eliminated;
};
