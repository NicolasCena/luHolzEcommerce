import "../src/styles/index.scss";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { AdminProducts } from "./routes/AdminProducts/AdminProducts";

function App() {
  return (
    <>
      <Provider store={store}>
        <div>
          <AdminProducts />
        </div>
      </Provider>
    </>
  );
}

export default App;
