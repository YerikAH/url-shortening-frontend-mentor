import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import NavMobile from "./components/NavMobile";

function App() {
  const [mobile, setMobile] = useState(false);
  const handleMobile = (value: boolean) => {
    setMobile(value);
  };
  return (
    <>
      {mobile && <NavMobile></NavMobile>}
      <Header mobile={mobile} handleMobile={handleMobile}></Header>
      <Main mobile={mobile}></Main>
      {!mobile && <Footer></Footer>}
    </>
  );
}

export default App;
