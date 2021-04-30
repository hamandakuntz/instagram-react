import ReactDOM from "react-dom";
import RenderNavbar from "./components/Navbar"
import RenderCorpo from "./components/Corpo"
import RenderFundo from "./components/FundoMobile"

function App() {
    return (
    <>
        <RenderNavbar/>
        <RenderCorpo />
        <RenderFundo />
    </>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));