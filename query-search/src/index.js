import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import { Provider } from "react-redux";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

function Scroller() {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else setIsVisible(false);
    });
  }, []);

  const scrollToTop = () => window.scroll(0, 0);

  return (
    isVisible && (
      <div className="scrollTop" title="Jump to top" onClick={scrollToTop}>
        <ArrowUpwardIcon
          sx={{ fontSize: 40 }}
          color="success"
          style={{ borderRadius: "15px", background: "white" }}
        />
      </div>
    )
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <Scroller />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
