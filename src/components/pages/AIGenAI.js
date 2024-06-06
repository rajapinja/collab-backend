import React from 'react';
import './AIvsGenAI.css'

const KeyDifferences = () => {
  return (
    <div>
      <h2 style={{color:"red", marginTop:"20px"}}>Key Differences</h2>
      <table style={{margin:"20px"}}>
        <thead>
          <tr style={{color:"rgb(162, 13, 217)"}}>
            <th>Feature</th>
            <th>AI</th>
            <th>Gen AI</th>
          </tr>
        </thead>
        <tbody style={{padding:"20px"}}>
          <tr>
            <td style={{color:"orange"}}>Goal</td>
            <td >Simulate human intelligence</td>
            <td >Create new and original content</td>
          </tr>
          <tr>
            <td style={{color:"green"}}>Output</td>
            <td>Decisions, insights, predictions</td>
            <td>Text, images, music, data, experiences</td>
          </tr>
          <tr>
            <td style={{color:"purple"}}>Techniques</td>
            <td>Rule-based systems, machine learning</td>
            <td>Deep learning (often Generative Adversarial Networks)</td>
          </tr>
          <tr>
            <td style={{color:"red"}}> Examples</td>
            <td>Chatbots, spam filters, self-driving cars</td>
            <td>AI art generators, music synthesis, data augmentation</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const Focus = ({ title, description }) => {
  return (
    <div>
      <h2 style={{justifyContent:"center", alignContent:"center", color:"red"}}>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

const Capability = ({ title, items }) => {
  return (
    <div>
      <h3 style={{justifyContent:"center", alignContent:"center", color:"Highlight"}}>{title}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const Technique = ({ title, description }) => {
  return (
    <div>
      <h3 style={{justifyContent:"center", alignContent:"center", color:"Highlight"}}>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const Example = ({ title, items }) => {
  return (
    <div>
      <h3  style={{color:"#075994"}}>{title}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const Overall = ({ text }) => {
  return (
    <div>
      <h2 style={{color:"green"}}>Overall</h2>
      <p>{text}</p>
    </div>
  );
};

const Analogy = ({ text }) => {
  return (
    <div>
      <h2 style={{color:"green"}}>Analogy</h2>
      <p>{text}</p>
    </div>
  );
};

const AIGenAI = () => {
  return (
    <div className='aivsgenai'>
      <h1 style={{justifyContent:"center", alignItems:"center"}}>AI vs Gen AI</h1>
      <div className='list-container'>
        <div className='sub-section'>
        <Focus
            title="Artificial Intelligence (AI):"
            description="Simulating human intelligence by processing information and making decisions."
        />
        <Capability
            title="Capabilities:"
            items={[
            'Pattern recognition',
            'Learning from data',
            'Problem-solving',
            'Decision-making',
            'Prediction'
            ]}
        />
        <Example
            title="Examples:"
            items={[
            'Self-driving cars',
            'Facial recognition systems',
            'Chatbots',
            'Spam filters',
            'Recommendation engines'
            ]}
        />
        <Focus
            title="Generative AI (Gen AI):"
            description="Creating new and original content, data, or experiences."
        />
        <Capability
            title="Capabilities:"
            items={[
            'Text generation (articles, poems, code)',
            'Image generation (realistic photos, art)',
            'Music generation',
            'Video synthesis',
            'Data augmentation (creating more training data for other AI systems)'
            ]}
        />
        <Technique
            title="Techniques:"
            description="Deep learning models like Generative Adversarial Networks (GANs)"
        />
        <Example
            title="Examples:"
            items={[
            'AI art generators',
            'Chatbots that can hold more creative conversations',
            'Generating realistic synthetic data for medical research',
            'Creating personalized music recommendations'
            ]}
        />
        <KeyDifferences />
        <Analogy
            text="Here's an analogy to further clarify the difference: Imagine AI as a chef who can follow recipes perfectly (interpreting data and following rules) but cannot create new dishes. Gen AI, on the other hand, is a creative chef who can not only follow recipes but also invent entirely new dishes (generate novel content)."
        />
        <Overall
            text="AI is a broader field encompassing various techniques to achieve human-like intelligence. Gen AI is a subfield of AI specifically focused on generating new content. Both AI and Gen AI are rapidly evolving fields with immense potential to impact various industries."
        />
        </div>
      </div>
    </div>
  );
};

export default AIGenAI;
