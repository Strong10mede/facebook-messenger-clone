import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import React, { forwardRef } from "react";
import "./Messages.css";

const Messages = forwardRef(({ message, username }, ref) => {
  const isUser = username === message.username;
  return (
    <div ref={ref} className={`message ${isUser && "message__user"}`}>
      <Typography
        className="alignLeft"
        variant="body2"
        display="block"
        gutterBottom
      >
        {!isUser && message.username}
      </Typography>
      <Card className={isUser ? "message__userCard" : "message__guestCard"}>
        <CardContent>
          <Typography color="initial" variant="subtitle1" component="h5">
            {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Messages;
