interface Parameters {
  [name: string]: any;
}

export const ThemeDecorator = (
  Story: () => JSX.Element,
  { parameters }: { parameters: Parameters },
) => {
  const { theme } = parameters;

  return (
    <div className={theme}>
      <Story />
    </div>
  );
};
