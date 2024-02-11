export const isLocal = (stage: string | undefined): boolean => {
  return !stage
    ? true
    : !['development', 'production'].includes(stage)
      ? true
      : false;
};
