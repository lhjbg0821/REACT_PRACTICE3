import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/Header";
import A from "./pages/a";
import B from "./pages/b";
import C from "./pages/c";
import Main from "./pages/main";
import NotFound from "./pages/NonFount";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-red-100 min-h-screen ">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/a" element={<A />} />
          <Route path="/b" element={<B />} />
          <Route path="/c" element={<C />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
