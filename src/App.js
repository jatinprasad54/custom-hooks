import { useEffect, useState } from "react";
import "./App.css";
import { useOnlineStatus } from "./useOnlineStatus";
function App() {
  return (
    <div className="App">
      <StatusBar />
      <StatusButton />
    </div>
  );
}

export default App;

function StatusBar() {
  const isOnline = useOnlineStatus();
  return <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>;
}

function StatusButton() {
  const isOnline = useOnlineStatus();
  return (
    <button disabled={!isOnline}>{isOnline ? "Save" : "Reconnecting"}</button>
  );
}
