{
  /* <script>
    const heading = document.createElement("h1");
    heading.innerHTML = "Hello Himani";

    const root = document.getElementById("root");
    root.appendChild(heading);
</script> */
}

// const heading = React.createElement("h1", {}, "Hello from Reactjs");

const parent = React.createElement("div", {}, [
  React.createElement("h1", {}, "Hello from Reactjs"),
  React.createElement("div", {}, React.createElement("p", {}, "main")),
  React.createElement("h3", {}, "code"),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
