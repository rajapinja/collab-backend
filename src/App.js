import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Marketing from './components/pages/Marketing';
import Consulting from './components/pages/Consulting';
import Design from './components/pages/Design';
import Development from './components/pages/Development';
import Overview from './components/pagination/Overview';
import Heading from './components/pagination/heading';
import AdditionalBenefits from './components/pagination/AdditionalBenefits';
import BonusTopics from './components/pagination/BonusTopics';
import WhyToChoose from './components/pagination/WhyToChoose';
import Contact from './components/pagination/Contact';
import Jop from './components/pages/Jop'; 
import AdvancedUtility from './components/pages/AdvancedUtility';
import GenerativeAI from './components/pages/GenerativeAI';
import TSpublicsites from './components/pages/TSpublicsites';
import VideoConf from './components/pages/VideoConf';
import AIvsGenAI from './components/pages/AIGenAI';
import RAGExplained from './components/pages/RAGExplained';
import LLMExplained from './components/pages/LLMExplained';
import MultiDropdown from './components/MultiDropdown';
import AIGenAILLMs from './components/pages/AIGenAILLMs';
import CardRotation from './components/pages/CardRotation';
import PointsAnimation from './components/pages/PointAnimation';
import Animation from './components/pages/Animation';
import CircleAnimationGPT from './components/animation/CircleAnimationGPT';
import AnimationDownward from './components/animation/AnimationDownward';
import CanvasAnimation from './components/animation/CanvasAnimation';
import CanvasImage from './components/animation/CanvasImage';
import LottieAnimation from './components/animation/LottieAnimation';
import FiveMinsVideo from './components/pages/FiveMinsVideo';
import RainAnimation from './components/animation/RainAnimation';
import CondaDocumentation from './components/pages/CondaDocumentation';
import AIMLCloudhosting from './components/pages/AIMLCloudhosting';
import HuggingFacesApps from './components/hugging_faces/HuggingFacesApps';
import GeminiProVsGpt4o from './components/pages/GeminiProVsGpt4o';
import ChatBotsTop10 from './components/pages/ChatBotsTop10';
import ChromaDB from './components/pages/ChromaDB';
import OllamaInstall from './components/pages/OllamaInstall';
import PyTestDocs from './components/pages/PyTestDocs';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/marketing' element={<Marketing />} />
        <Route path='/consulting' element={<Consulting />} />
        <Route path='/design' element={<Design />} />
        <Route path='/development' element={<Development />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/heading" element={<Heading />} />
        <Route path="/abenefits" element={<AdditionalBenefits />} />
        <Route path="/bonusTopics" element={<BonusTopics />} />
        <Route path="/whyToChoose" element={<WhyToChoose />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/jop" element={<Jop />} />
        <Route path="/advanced" element={<AdvancedUtility />} />
        <Route path="/generativeai" element={<GenerativeAI />} />
        <Route path="/tspubsites" element={<TSpublicsites />} />
        <Route path="/videoconf" element={<VideoConf />} />
        <Route path="/aivsgenai" element={<AIvsGenAI />} />
        <Route path="/rag" element={<RAGExplained />} />
        <Route path="/llms" element={<LLMExplained />} />
        <Route path="/aigenaillms" element={<AIGenAILLMs />} />
        <Route path="/cardrotation" element={<CardRotation />} />
        <Route path="/pointanimation" element={<PointsAnimation />} />
        <Route path="/animation" element={<Animation />} />      
        <Route path="/circleanimationgpt" element={<CircleAnimationGPT />} />       
        <Route path="/animationdownward" element={<AnimationDownward />} />  
        <Route path="/canvasanimation" element={<CanvasAnimation />} /> 
        <Route path="/canvasimage" element={<CanvasImage />} /> 
        <Route path="/lottieanimation" element={<LottieAnimation />} /> 
        <Route path="/fiveminsvideo" element={<FiveMinsVideo />} /> 
        <Route path="/rainanimation" element={<RainAnimation />} /> 
        <Route path="/anacondadocs" element={<CondaDocumentation />} /> 
        <Route path="/aimlcloudhosting" element={<AIMLCloudhosting />} /> 
        <Route path="/hfapps" element={<HuggingFacesApps />} /> 
        <Route path="/geminivs4o" element={<GeminiProVsGpt4o />} /> 
        <Route path="/chatbottop10" element={<ChatBotsTop10 />} />
        <Route path="/chromadb" element={<ChromaDB />} />
        <Route path="/ollama" element={<OllamaInstall />} />
        <Route path="/pytestdocs" element={<PyTestDocs />} />
      </Routes>
      
      {/* <Pagination/> */}
    </Router>
  );
}

export default App;