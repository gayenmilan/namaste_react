const heading = React.createElement(
  "h1",
  { class: "heading" },
  "Hello World from React !"
);

const rootelement = ReactDOM.createRoot(document.getElementById("root"));

rootelement.render(heading);
