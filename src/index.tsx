import { render } from "react-dom";
import { App } from "./App";
import { AuthProvider } from "./lib/auth";
import { ReactQueryProvider } from "./lib/react-query";
import { initMock } from "./mock";
import "./styles.css";

function DemoApp() {
  return (
    <ReactQueryProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ReactQueryProvider>
  );
}

const rootElement = document.getElementById("root");
initMock.then(() => {
  render(<DemoApp />, rootElement);
});
