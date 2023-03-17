import React, { createContext, useState } from 'react';


export const ContextProvider = createContext(null);

function ContextContainer(props) {
    const [apirequestobj, setApiRequest] = useState({});
    const [riddleapi, setRiddleApi] = useState({});
    const [riddleclicked, setRiddleClicked] = useState(false);
    const [apistate, setApiState] = useState("");
    const ContextValue = {
        quotegenerator: quotegenerator,
        factgenerator: factgenerator,
        jokegenerator: jokegenerator,
        riddlegenerator: riddlegenerator,
        apirequestobj: apirequestobj,
        setApiRequest: setApiRequest,
        apistate: apistate,
        setApiState: setApiState,
        getQuote: getQuote,
        getJoke: getJoke,
        getFact: getFact,
        getRiddle: getRiddle,
        riddleapi: riddleapi,
        riddleclicked: riddleclicked,
        setRiddleClicked: setRiddleClicked,
        setRiddleApi: setRiddleApi


    }
    
    async function quotegenerator() {
        const options = {
          method: 'GET',
          headers: {
            'X-API-Key': 'd5XNR8cKz0GT1uoI3HttXg==m0LAtX56TaDfHGPn',
          }
        };   
        const category="attitude";
        const response= await fetch('https://api.api-ninjas.com/v1/quotes?category='+category, options);
        const data = await response.json();
        setApiRequest({apicontent: data[0].quote});
      }

      async function factgenerator() {
        const options = {
          method: 'GET',
          headers: {
            'X-API-Key': 'd5XNR8cKz0GT1uoI3HttXg==m0LAtX56TaDfHGPn',
          }
        };

        const response= await fetch('https://api.api-ninjas.com/v1/facts?limit=1', options);
        const data = await response.json();
        setApiRequest({apicontent: data[0].fact});

      }

      async function jokegenerator() {
        const options = {
          method: 'GET',
          headers: {
            'X-API-Key': 'd5XNR8cKz0GT1uoI3HttXg==m0LAtX56TaDfHGPn',
          }
        };

        const response= await fetch('https://api.api-ninjas.com/v1/jokes?limit=1', options);
        const data = await response.json();
        setApiRequest({apicontent: data[0].joke});

      }

      async function riddlegenerator() {
        const options = {
          method: 'GET',
          headers: {
            'X-API-Key': 'd5XNR8cKz0GT1uoI3HttXg==m0LAtX56TaDfHGPn',
          }
        };

        const response= await fetch('https://api.api-ninjas.com/v1/riddles', options);
        const data = await response.json();
        setRiddleApi({title: data[0].title, question: data[0].question, answer: data[0].answer});

      }
      function getQuote()
    {
        setRiddleClicked(false);
        quotegenerator();
        setApiState("Quote");
        setRiddleApi({});
    }
    function getJoke()
    {
        setRiddleClicked(false);
        jokegenerator();
        setApiState("Joke");
        setRiddleApi({});
    }
    function getFact()
    {
        setRiddleClicked(false);
        factgenerator();
        setApiState("Fact");
        setRiddleApi({});
    }
    function getRiddle()
    {
        setRiddleClicked(true);
        riddlegenerator();
        setApiState("Riddle");
        setApiRequest({});
    }
  return (
    <ContextProvider.Provider value={ContextValue}>
        {props.children}
    </ContextProvider.Provider>
  )
}

export default ContextContainer;