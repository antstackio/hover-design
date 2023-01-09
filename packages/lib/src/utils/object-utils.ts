export const eliminateUndefinedKeys = (record: Record<any, any>) => {
  const keys = Object.keys(record);
  const eliminated: Record<any, any> = {};
  for (const key of keys) {
    const value = record[key];
    if (value !== undefined) {
      eliminated[key] = value;
    }
  }
  return eliminated;
};
