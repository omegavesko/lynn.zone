export const classes = (...classes: (string | undefined | false)[]) => {
  return classes.filter(Boolean).join(` `);
};
