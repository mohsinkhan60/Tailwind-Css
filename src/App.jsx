import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Students from "./components/Students";

export const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Students />
      <Product />
    </>
  );
};
export default App;
