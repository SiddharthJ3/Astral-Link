import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Chatcontext = createContext();

const ChatProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [selectedChat, setSelectedChat] = useState();
  const [chats, setChats] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    setUser(userInfo);

    if (!userInfo) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <Chatcontext.Provider
      value={{ user, setUser, selectedChat, setSelectedChat, chats, setChats }}
    >
      {children}
    </Chatcontext.Provider>
  );
};

export const ChatState = () => {
  return useContext(Chatcontext);
};

export default ChatProvider;
