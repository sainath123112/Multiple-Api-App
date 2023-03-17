import { useContext } from "react";
import { ContextProvider } from "./ContextContainer";

import "./ApiRequest.css";
function ApiRequest(props) {

    const { riddleclicked,  apirequestobj, riddleapi, apistate} = useContext(ContextProvider);
  return (
    (Object.keys(riddleapi).length === 0 && Object.keys(apirequestobj).length === 0)? <div className="api-request"> <p className="no-content">No content</p> </div> :
        !riddleclicked? <div className="api-request">
        <h3>{apistate}</h3>
       <p className="api-content">{apirequestobj.apicontent}</p> 
    </div> : <div className="api-request">
        <h3>{apistate}</h3>
        <div className="riddle">
            <p className="riddle-title"><span>Title:</span> {riddleapi.title}</p> 
            <p className="riddle-qsn"><span>Question:</span> {riddleapi.question}</p>
            <p className="riddle-ans"><span>Answer:</span> {riddleapi.answer}</p>
        </div>
      
    </div>
        
        
    
  )
}

export default ApiRequest;