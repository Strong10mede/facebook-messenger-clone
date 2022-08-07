import React, { useEffect, useState } from "react";
import "./App.css";
import { IconButton, FormControl, Input, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import Messages from "./Components/Messages";
import { db } from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@mui/icons-material/Send";
import Logo from "./logo.png";
function App() {
  const [input, setInput] = useState("");
  const [messages, setMessage] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessage(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);
  const name = () => {
    let enterName = "";
    while (!enterName || enterName.length > 16) {
      enterName = prompt("Please Enter Your Name");
    }

    return enterName;
  };
  useEffect(() => {
    setUsername(name);
  }, []);
  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("messages").add({
      username: username,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#0b81ff",
      },
      secondary: {
        // This is green.A700 as hex.
        main: "#0b81ff",
      },
    },
  });

  return (
    <div className="app">
      <header className="app__header">
        <h1>
          <img src={Logo} className="logo" alt="React Messenger" /> React
          Messenger
        </h1>

        <h3>
          Welcome <span className="bold">{username}</span> !
        </h3>
      </header>

      <form className="app__form">
        <ThemeProvider theme={theme}>
          <FormControl className="app__formControl">
            <Input
              placeholder="Enter a message"
              className="app__input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <IconButton
              className="app__button"
              disabled={!input}
              color="primary"
              variant="contained"
              type="submit"
              onClick={sendMessage}
            >
              <SendIcon />
            </IconButton>
          </FormControl>
        </ThemeProvider>
      </form>
      <div className="app__messageContainer">
        <FlipMove>
          {messages.map(({ id, message }) => (
            <Messages key={id} username={username} message={message} />
          ))}
        </FlipMove>
      </div>
    </div>
  );
}

export default App;
