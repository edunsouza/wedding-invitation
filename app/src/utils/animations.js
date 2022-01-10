export const typewriter = (node, { speed = 1 }) => {
  const text = node.textContent;
  return {
    duration: text.length / (speed * 0.01),
    tick: t => {
      const i = ~~(text.length * t);
      node.textContent = text.slice(0, i);
    }
  };
};

export const flyTransitionOptions = {
  y: -30,
  duration: 3000,
};