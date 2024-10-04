export type Mods = Record<string, boolean | undefined | string>;

export const classNames = (
  cls: string,
  mods: Mods,
  additional: Array<string | undefined>,
) => {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([, value]) => Boolean(value))
      .map(([cls]) => cls),
  ].join(' ');
};
