import {Header} from "./components/Home"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Header />} />
        {/* <Route path="/genre/83" element={""}/>
          <Route path="/genre/34399" element={""}/>
          <Route path="/latest" element={""}/>
          <Route path="/browse/my-list" element={""}/>
          <Route path="/browse/original-audio" element={""}/> */}
      </Routes>

    </BrowserRouter>
  );
}

export default App;
