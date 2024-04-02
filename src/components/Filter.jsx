import "./FilterStyle.scss";
function Filter() {
  return (
    <div className="buttonDisplay">
      <button>Logique</button>
      <button>Synthaxe</button>
      <button>Importation</button>
    </div>
  );
}
export default Filter;

//   {frameworkItems.map((Val, id) => {
//     return <button key={id}>salut</button>;
//   })}
