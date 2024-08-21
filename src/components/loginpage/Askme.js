import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import Robo from './images/blue-robot-holding-a-sign-with-space-chatbot-icon-concept-chat-bot-or-chatterbot-png-image-vector-removebg-preview.png';

// Styled components
const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px 16px;
  background-color: #5c0295;
  color: #ffffff;
  font-weight: bold;
`;

const Avatar = styled.div`
  background-color:  #6236c5;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
`;

const ChatBox = styled.div`
  flex: 1;
  width: 100%;
  padding: 16px;
  overflow-y: auto;
  background-color: #f7fafc;
`;
const Charboat = styled.div`
display: flex;
align-items: center;
justify-content: center;
color:  #8e36c5;
margin-top: 50%;
font-weight: 500;
`;

const Message = styled.div`
  margin: 8px 0;
  padding: 10px;
  border-radius: 8px;
  background-color: ${(props) => (props.isBot ? "#8e36c5" : "#edf2f7")};
  color: ${(props) => (props.isBot ? "#ffffff" : "#1a202c")};
  align-self: ${(props) => (props.isBot ? "flex-start" : "flex-end")};
  margin-left:${(props) => (props.isBot ? "115px" : "")};
  max-width: 80%;
`;

const InputContainer = styled.form`
width: 70%;
  display: flex;
  align-items: center;
  padding: 12px;
  border-top: 1px solid #e2e8f0;
  background-color: #ffffff;
`;

const Input = styled.input`
  flex: 1;
  border: 1px solid #cbd5e0;
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 14px;
  outline: none;
`;

const SendButton = styled.button`
    width: 45px;
    height: 45px;
  background-color: #5c0295;  
  color: #ffffff;
  border: none;
  padding: 8px;
  border-radius: 50%;
  margin-left: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #6236c5;
  }
`;

const LinkButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px;
  gap: 8px;
  flex-wrap: wrap;
`;

const LinkButton = styled.button`
  border: 1px solid #8e36c5;
  color:#8e36c5;
  background-color: #ffffff;
  padding: 8px 12px;
  border-radius: 20px;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    background-color: #e2e8f0;
  }
`;

// Main Component
function Askme(props) {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const[callApi,setCallApi]=useState(false);

  const handleSendMessage = async (e) => {
    if(e){
      e.preventDefault();
    }

    if (userInput.trim() === "") return;

    // Add user message to chat
    const newMessages = [...messages, { text: userInput, isBot: false }];
    setMessages(newMessages);
    setUserInput("");
    setIsLoading(true);

    // Call the API to get the bot's response
    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyDE0Ru86HvsWQ-bD7pbdDB7o3NIrFbMCbA`,
        {
          contents: [{ parts: [{ text: userInput }] }],
        }
      );

      const botMessage =
        response.data?.candidates[0]?.content?.parts[0]?.text ||
        "Sorry, I didn't understand that.";

      // Add bot message to chat
      setMessages([...newMessages, { text: botMessage, isBot: true }]);
    } catch (error) {
      console.error("Error fetching the bot response:", error);
      setMessages([
        ...newMessages,
        { text: "Sorry, something went wrong.", isBot: true },
      ]);
    }

    setIsLoading(false);
  };
const handeleclose=()=>{
props.setOpenslide(false)
}

const valuesend=(data)=>{
  setCallApi(true);
  setUserInput(data);
}

useEffect(()=>{
if(callApi){
  setCallApi(false)
  handleSendMessage()
}
},[userInput])
  return (
    <SlidingPane
      className="custom-pane-class"
      overlayClassName="custom-overlay-class"
      isOpen={true}
      hideHeader={true}
      from="right"
      width="39%"
    >
      <ChatContainer>
        <Header>
          <Avatar>AW</Avatar>
          <span>ATOMWALK-AI</span>
          <button onClick={handeleclose} style={{ background: 'none', border: 'none', color: '#ffffff', cursor: 'pointer' }}>X</button>
        </Header>
        <ChatBox>
          {messages.map((msg, index) => (
            <Message key={index} isBot={msg.isBot}>
              <ReactMarkdown>{msg.text}</ReactMarkdown>
            </Message>
          ))}
          {isLoading && <Message isBot={true}>Generating...</Message>}
          {messages.length==0&&<Charboat>Hii how can i help you💁‍♀️</Charboat>}
        </ChatBox>
    
        <LinkButtonContainer>
          <LinkButton onClick={()=>valuesend("What is Manufacturing ERP ?")}>What is Manufacturing ERP ?</LinkButton>
          <LinkButton  onClick={()=>valuesend("Why Business need Manufacturing ERP ?")}>Why Business need Manufacturing ERP ?</LinkButton>
          <LinkButton  onClick={()=>valuesend("Whene is the Right Time to Implement Manufacturing ERP ?")}>Whene is the Right Time to Implement Manufacturing ERP ?</LinkButton>
          <LinkButton  onClick={()=>valuesend("How Atomwalk office support Manufacturing ERP ?")}>How Atomwalk office support Manufacturing ERP ?</LinkButton>
          <LinkButton  onClick={()=>valuesend("What is CRM")}>What is CRM</LinkButton>
        </LinkButtonContainer>
        <InputContainer>
          <Input
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type your message..."
          />
          <SendButton type="submit" disabled={isLoading} onClick={handleSendMessage}>
            ➤
          </SendButton>
        </InputContainer>
      </ChatContainer>
    </SlidingPane>
  );
}

export default Askme;
