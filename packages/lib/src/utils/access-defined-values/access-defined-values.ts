export const accessDefinedValues = (
  value: string | undefined,
  definitionObject: Record<string, string>
) => {
  const keys = Object.keys(definitionObject);
  if (value && keys.includes(value)) {
    return definitionObject[value];
  } else {
    return value;
  }
};
