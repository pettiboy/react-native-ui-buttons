export const reduceOpacity = (color: string, reduceTo: number) => {
  let finalColor;
  if (color.startsWith('rgba')) {
    finalColor = color.slice(0, -4).concat(`0.${reduceTo})`);
  } else if (color.startsWith('rgb')) {
    finalColor = color.replace(')', `,0.${reduceTo})`).replace('b(', 'ba(');
  }
  return finalColor;
};
