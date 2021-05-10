export const zeroPadTag = (strings, ...args) => {
  const result = [];
  for (let i = 0; i < args.length; i += 1) {
    result.push(strings[i]);
    result.push(String(args[i]).padStart(2, `0`));
  }
  result.push(strings[strings.length - 1]);

  return result.join(``);
};

const limitNumber = (num, min = 0, max = 255) => {
  return Math.min(Math.max(num, min), max);
};

export const lightenColor = (color, percent) => {
  const num = parseInt(color.replace(`#`, ``), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const B = (num >> 8 & 0x00FF) + amt;
  const G = (num & 0x0000FF) + amt;

  return `#` + (0x1000000 + limitNumber(R) * 0x10000 + limitNumber(B) * 0x100 + limitNumber(G)).toString(16).slice(1);
};
