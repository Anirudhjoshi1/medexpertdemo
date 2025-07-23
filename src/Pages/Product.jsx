import "../styles/Product.css"; // Extracted CSS styles should be placed in Product.css
import React, { useState, useEffect } from "react"; // <-- add useEffect
import { useRef } from "react";
import medex from '../assets/MedEx.jpeg'
import Sidebar from "../Components/Sidebar";

const Product = () => {
  const [chatMessages, setChatMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [inputVisible, setInputVisible] = useState(false);
  const [submitEnabled, setSubmitEnabled] = useState(false);
  const [newMedEnabled, setNewMedEnabled] = useState(false);

  const llm_url =
    "https://101.53.149.101/api/v1/workspace/pharma/thread/a99dcd91-5812-4f66-8cd5-f472180b01d0/chat";
  const headers = {
    Accept: "application/json",
    Authorization: "Bearer H56YD1H-4QDMHFX-QZN558T-3EV4Y03",
    "Content-Type": "application/json",
  };

  useEffect(() => {
    setInputVisible(false);
    setSubmitEnabled(false);
    setNewMedEnabled(false);
  }, []);

  const formatResponse = (responseText) => {
    return responseText
      .replace(
        "**Product Knowledge Accuracy:**",
        "<b>Product Knowledge Accuracy:</b><br>"
      )
      .replace("**Sales Acumen:**", "<b>Sales Acumen:</b><br>")
      .replace("**Feedback:**", "<b>Feedback:</b><br>")
      .replace("**Strengths:**", "<b>Strengths:</b><br>")
      .replace(
        "**Areas for Improvement:**",
        "<b>Areas for Improvement:</b><br>"
      )
      .replace("**Score:**", '<b>Score:</b> <span class="score">')
      .replace(/(\d+\/10)/, "$1</span>");
  };

  const sendMessage = async (message, setLoading = true) => {
    if (setLoading) setIsLoading(true);

    const data = { message, mode: "query", userId: 1 };
    try {
      const response = await fetch(llm_url, {
        method: "POST",
        headers,
        body: JSON.stringify(data),
      });
      const json = await response.json();
      const responseText = json.textResponse || "No response from API.";
      setChatMessages((prev) => [
        ...prev,
        { from: "evaluator", text: formatResponse(responseText) },
      ]);
      setSubmitEnabled(true);
      setNewMedEnabled(true);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const testSkill = () => {
    setInputVisible(true);
    setSubmitEnabled(false);
    setNewMedEnabled(false);
    sendMessage("hi");
  };

  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  const submitAnswer = () => {
    if (!input.trim()) return;
    setChatMessages((prev) => [...prev, { from: "you", text: input.trim() }]);
    sendMessage(input.trim());
    setInput("");
  };

  const handleNewMedicine = () => {
    const message = "Can you ask about another medicine?";
    setIsLoading(true);
    setNewMedEnabled(false);
  
    sendMessage(message, false); // don't reset loading again inside sendMessage
  };

  const handleEnterclick = (e) => {
    if(e.key === "Enter"){
      e.preventDefault();
      submitAnswer()
    }
  }
  

  return (
    <>
    <div className="dashboard">
    <Sidebar/>
    <div id="main-container">
      <div id="logo-container">
      <img id="logo" src={medex} alt="Logo" />
        <div id="app-name">Med<span className='spann'>X</span>pert</div>
      </div>

      <div id="screen">
        <div id="chat-text">
          {chatMessages.map((msg, idx) => (
            <div
              key={idx}
              className={`chat-message ${msg.from}`}
              dangerouslySetInnerHTML={{
                __html: `<b>${
                  msg.from === "you" ? "You" : "Evaluator"
                }:</b><br>${msg.text}`,
              }}
            />
          ))}
          <div ref={chatEndRef} />
        </div>
        {isLoading && <div id="analyzingAnimation" className="animation"></div>}
      </div>


      <div className="interaction-section">

      {inputVisible && (
        <textarea
          id="text-input"
          placeholder="Type your response here"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleEnterclick}
          disabled={!submitEnabled}
        />
      )}

<div id="buttons-container">
  {/* Show only Test My Skill button initially */}
  {!submitEnabled && !newMedEnabled && (
    <button
      className="button-82-pushable"
      role="button"
      onClick={testSkill}
    >
      <span className="button-82-shadow"></span>
      <span className="button-82-edge"></span>
      <span className="button-82-front text">Test My Skill</span>
    </button>
  )}

  {/* Show Submit button only when submitEnabled is true */}
  {submitEnabled && (
    <button
      className="button-82-pushable"
      role="button"
      onClick={submitAnswer}
    >
      <span className="button-82-shadow"></span>
      <span className="button-82-edge"></span>
      <span className="button-82-front text">Submit</span>
    </button>
  )}

  {/* Show New Medicine button only when newMedEnabled is true */}
  {newMedEnabled && (
    <button
      className="button-82-pushable"
      role="button"
      onClick={handleNewMedicine}
    >
      <span className="button-82-shadow"></span>
      <span className="button-82-edge"></span>
      <span className="button-82-front text">New Medicine</span>
    </button>
  )}
</div>
</div>

    </div>
    </div>
    </>
  );
};

export default Product;
