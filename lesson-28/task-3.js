const styles = [
  { id: 1, name: "color", style: "red" },
  { id: 2, name: "font-size", style: "22px" }
];

const render = (styles, text) => {
  const style = styles.map(({ name, style }) => `${name}: ${style};`).join(" ");

  const element = `<p style="${style}">${text}</p>`;
  console.log(element);
  document.write(element);
};
render(styles, "Hello!");
