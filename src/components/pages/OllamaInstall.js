// src/Instructions.js
import React from 'react';
import AwsEmbeddingsOllama from './AwsEmbeddingsOllama';

const OllamaInstall = () => {
  return (
    <div>
        <AwsEmbeddingsOllama/>
      <h2>Download and Install Ollama LLM Model on Local for Windows 10</h2>
      <ol>
        <li>https://ollama.com/download/windows</li>
      </ol>     
      <br/>
      <h2>How to Find and Configure Ollama Executable Path</h2>
      <ol>
        <li>Open Command Prompt or PowerShell.</li>
        <li>Run the command <code>where ollama</code> to locate the executable.</li>
        <li>
          Note the path returned, e.g., <code>C:\Users\raja_\AppData\Local\Programs\Ollama\ollama.exe</code>
        </li>
        <li>Open PowerShell profile for editing: <code>notepad $profile</code></li>
        <li>Add the Ollama directory to the PATH:
          <pre>$env:Path += ";C:\Users\raja_\AppData\Local\Programs\Ollama"</pre>
        </li>
        <li>Save and close the profile file.</li>
        <li>Reload PowerShell profile: <code>. $profile</code></li>
        <li>Verify in PowerShell: <code>ollama --version</code></li>
        <li><code>ollama pull mistral </code></li>        
        <h3> Include and invoke mistral in your python code </h3>
        <li><code>model = Ollama(model="mistral")</code></li>
        <li><code>response_text = model.invoke(prompt)</code></li>      
        <li><code>(ragvenv) PS C:\_Raja\_GenAI_Apps\langchain-rag\RAG_TUT2&gtn py query_data.py "How many points does the longest continuous train get in Ticket to Ride?"</code></li>
        <li><code>Response:  Based on the provided context, the player who has the Longest Continuous Path of routes receives a 10 point bonus. The length of the longest continuous train itself is not explicitly stated in the given information.
            Sources: ['data\\ticket_to_ride.pdf:3:3', 'data\\ticket_to_ride.pdf:3:1', 'data\\ticket_to_ride.pdf:0:1', 'data\\ticket_to_ride.pdf:1:3', 'data\\ticket_to_ride.pdf:3:2'] </code></li>
      </ol>
    </div>
  );
};

export default OllamaInstall;
