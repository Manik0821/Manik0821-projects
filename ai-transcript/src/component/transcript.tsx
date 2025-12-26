import { useEffect, useRef, useState } from "react";
import "./transcript.css";
import prevChat from "./chat.json"

type Speaker = "me" | "other";

type Messages = {
    id: number,
    speaker: Speaker,
    text: string
}


export const Transcription = () => {
    const [message, setMessage] = useState<Messages[]>(prevChat as Messages[]);
    const [currMsg, setCurrMsg] = useState("");
    const [currMsgOther, setCurrMsgOther] = useState("");
    const currentRef = useRef<HTMLDivElement | null>(null);
    
    //  scroll 
    useEffect(() => {
        if (currentRef.current) {
            currentRef.current.scrollTo({
                top: currentRef.current.scrollHeight,
                behavior: "smooth", // This creates the animated transition
            });
        }
    }, [message]);

    const onUpdateUser = (speaker : Speaker) => {
        const textToSend = speaker === "me"?currMsg:currMsgOther;

        if(!textToSend.trim())return;

        const newMessage : Messages = {
            id: Date.now(),
            speaker: speaker,
            text: textToSend
        }

        setMessage((prev) => ([...prev, newMessage]));

        if(speaker==="me") setCurrMsg("");
        else setCurrMsgOther("");
    }

    const handleKeyDown = (e: any , speaker:Speaker) => {
        if(e.key === "Enter" && !e.shiftKey){
            e.preventDefault();
            onUpdateUser(speaker);
        }
    }

    return (
        <div className="transcription-container">
            <div className="sender-side">
                <h1>Input Panel</h1>
                <div className="button-container">
                    <div className="button-styling">
                        <textarea
                            placeholder="Type as User..."
                            value={currMsg}
                            onChange={(e)=>setCurrMsg(e.target.value)}
                            onKeyDown={(e) => handleKeyDown(e, "me")}
                        />
                        <button className="send-btn" onClick={()=>onUpdateUser("me")}>User</button>
                    </div>
                    <div className="button-styling">
                        <textarea 
                            placeholder="Type as AI..."
                            value={currMsgOther} 
                            onChange={(e)=>(setCurrMsgOther(e.target.value))} 
                            onKeyDown={(e) => handleKeyDown(e, "other")}
                        />
                        <button className="send-btn" onClick={()=>onUpdateUser("other")}>AI</button>
                    </div>
                </div>
            </div>
            <div className="chat-side">
                <h2>Chat</h2>
                <div className="transcript-window" ref={currentRef} >
                    {message.map((m) => (
                        <div key={m.id} className="message-container" style={{ justifyContent: m.speaker == "me" ? "flex-end" : "flex-start" }}>
                            <div className={`message bubble-${m.speaker}`}>
                                {m.text}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};