import Contenido from "./components/contenido";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
     <Contenido /> 
    </div>
  );
};

export default App;
