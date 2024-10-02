import { useEffect, useState } from "react";
import "./App.css";

import ChatRoom from "./ChatRoom.js";
function App() {
  const [roomId, setRoomId] = useState("general");
  return (
    <>
      <label>
        Choose the chat room:{" "}
        <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <hr />
      <ChatRoom roomId={roomId} />
    </>
  );
}

export default App;

// function StatusBar() {
//   const isOnline = useOnlineStatus();
//   return <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>;
// }

// function StatusButton() {
//   const isOnline = useOnlineStatus();
//   return (
//     <button disabled={!isOnline}>{isOnline ? "Save" : "Reconnecting"}</button>
//   );
// }
