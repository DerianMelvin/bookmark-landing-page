import SubHeading from "./components/SubHeading";
import Header from "./header/header";

function App() {
  return (
    <div className="App">
      <Header />
      <SubHeading
        subtitle="Features"
        description="Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go."
      />
    </div>
  );
}

export default App;
