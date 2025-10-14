import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import 'antd/dist/reset.css'; // for AntD v5+
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


ReactDOM.createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
);
