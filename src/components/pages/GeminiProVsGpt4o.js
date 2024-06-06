import React from 'react';
import './Article.css';

const GeminiProVsGpt4o = () => {
  return (
    <div className='geminipro4o'>
        <div className="article">
            <h1>ChatGPT 4o vs Gemini 1.5 Pro: It’s Not Even Close</h1>
            <p className="author">Raja Pinja</p>
            <p className="date">Updated: May 21, 2024</p>
            <p className="comments">Comments 19</p>
            <hr />
            <div className="content">
                <p>
                <strong>In Short</strong>
                <br />
                We have performed many commonsense reasoning and multimodal tests on both ChatGPT 4o and Gemini 1.5 Pro. ChatGPT 4o performs much better than Gemini 1.5 Pro in a variety of tasks including reasoning, code generation, multimodal understanding, and more. In one of my tests, ChatGPT 4o created a Python game within seconds, but Gemini 1.5 Pro failed to generate the correct code.
                </p>
                <p>
                OpenAI introduced its flagship GPT-4o model at the Spring Update event and made it free for everyone. Just after a day, at the Google I/O 2024 event, Google debuted the Gemini 1.5 Pro model for consumers via Gemini Advanced. Now that two flagship models are available for consumers, let’s compare ChatGPT 4o and Gemini 1.5 Pro and see which one does a better job. On that note, let’s begin.
                </p>
                <p>
                <strong>Note:</strong> To ensure consistency, we have performed all our tests on Google AI Studio and Gemini Advanced. Both host the latest Gemini 1.5 Pro model.
                </p>
                <h2>Table of Contents</h2>
                <ol>
                <li>Calculate Drying Time</li>
                <li>Magic Elevator Test</li>
                <li>Locate the Apple</li>
                <li>Which is Heavier?</li>
                <li>Follow User Instructions</li>
                <li>Multimodal Image Test</li>
                <li>Character Recognition Test</li>
                <li>Create a Game</li>
                </ol>
                <h3>1. Calculate Drying Time</h3>
                <p>We ran the classic reasoning test on ChatGPT 4o and Gemini 1.5 Pro to test their intelligence. OpenAI’s ChatGPT 4o aced it while the improved Gemini 1.5 Pro model struggled to understand the trick question. It dabbled into mathematical calculations, coming to a wrong conclusion.</p>
                <p>If it takes 1 hour to dry 15 towels under the Sun, how long will it take to dry 20 towels?</p>
                <p><strong>Winner:</strong> ChatGPT 4o</p>
               
                <h3>2. Magic Elevator Test</h3>
                <p>In the magic elevator test, the earlier ChatGPT 4 model had failed to correctly guess the answer. However, this time, the ChatGPT 4o model responded with the right answer. Gemini 1.5 Pro also generated the right answer.</p>
                <p><strong>Winner:</strong> ChatGPT 4o and Gemini 1.5 Pro</p>
              
                <h3>3. Locate the Apple</h3>
                <p>In this test, Gemini 1.5 Pro outrightly failed to understand the nuances of the question. It seems the Gemini model is not attentive and overlooks many key aspects of the question. On the other hand, ChatGPT 4o correctly says that the apples are in the box on the ground. Kudos OpenAI!</p>
                <p><strong>Winner:</strong> ChatGPT 4o</p>
              
                <h3>4. Which is Heavier?</h3>
                <p>In this commonsense reasoning test, Gemini 1.5 Pro gets the answer wrong and says both weigh the same. But ChatGPT 4o rightly points out that the units are different, hence, a kg of any material will weigh more than a pound. It looks like the improved Gemini 1.5 Pro model has gotten dumber over time.</p>
                <p><strong>Winner:</strong> ChatGPT 4o</p>
               
                <h3>5. Follow User Instructions</h3>
                <p>I asked ChatGPT 4o and Gemini 1.5 Pro to generate 10 sentences ending with the word “mango”. Guess what? ChatGPT 4o generated all 10 sentences correctly, but Gemini 1.5 Pro could only generate 6 such sentences.</p>
                <p><strong>Winner:</strong> ChatGPT 4o</p>
               
                <h3>6. Multimodal Image Test</h3>
                <p>François Fleuret, author of The Little Book of Deep Learning, performed a simple image analysis test on ChatGPT 4o and shared the results on X (formerly Twitter). He has now deleted the tweet to avoid blowing the issue out of proportion since he says, it’s a general issue with vision models.</p>
                <p>That said, I performed the same test on Gemini 1.5 Pro and ChatGPT 4o from my end to reproduce the results. Gemini 1.5 Pro performed much worse and gave wrong answers for all questions. ChatGPT 4o, on the other hand, gave one right answer but failed on other questions.</p>
                <p>It goes on to show that there are many areas where multimodal models need improvements. I am particularly disappointed with Gemini’s multimodal capability because it seemed far off from the correct answers.</p>
                <p><strong>Winner:</strong> None</p>
              
                <h3>7. Character Recognition Test</h3>
                <p>In another multimodal test, I uploaded the specifications of two phones (Pixel 8a and Pixel 8) in image format. I didn’t disclose the phone names, and neither the screenshots had phone names. Now, I asked ChatGPT 4o to tell me which phone should I buy.</p>
                <p>It successfully extracted texts from the screenshots, compared the specifications, and correctly told me to get Phone 2, which was actually the Pixel 8. Further, I asked it to guess the phone, and again, ChatGPT 4o generated the right answer — Pixel 8.</p>
                <p><strong>Winner:</strong> ChatGPT 4o</p>
               
                <h3>8. Create a Game</h3>
                <p>Now to test the coding ability of ChatGPT 4o and Gemini 1.5 Pro, I asked both models to create a game. I uploaded a screenshot of the Atari Breakout game (of course, without divulging the name), and asked ChatGPT 4o to create this game in Python. In just a few seconds, it generated the entire code and asked me to install an additional “pygame” library. create a python game using chatgpt 4o
                    I pip installed the library and ran the code with Python. The game launched successfully without any errors. Amazing! No back-and-forth debugging needed. In fact, I asked ChatGPT 4o to improve the experience by adding a Resume hotkey and it quickly added the functionality. That’s pretty cool.
                    create a game with gemini 1.5 pro Next, I uploaded the same image on Gemini 1.5 Pro and asked it to generate the code for this game. It generated the code, but upon running it, the window kept on closing. I couldn’t play the game at all. Simply put, for coding tasks, ChatGPT 4o is much more reliable than Gemini 1.5 Pro.
                </p>
                <p><strong>Winner:</strong> ChatGPT 4o</p>       
                <h3> The Verdict</h3>
                <p> It’s evidently clear that Gemini 1.5 Pro is far behind ChatGPT 4o. Even after improving the 1.5 Pro model for months while in preview, it can’t compete with the latest GPT-4o model by OpenAI. From commonsense reasoning to multimodal and coding tests, ChatGPT 4o performs intelligently and follows instructions attentively. Not to miss, OpenAI has made ChatGPT 4o free for everyone.
                    The only thing going for Gemini 1.5 Pro is the massive context window with support for up to 1 million tokens. In addition, you can upload videos too which is an advantage. However, since the model is not very smart, I am not sure many would like to use it just for the larger context window.
                    At the Google I/O 2024 event, Google didn’t announce any new frontier model. The company is stuck with its incremental Gemini 1.5 Pro model. There is no information on Gemini 1.5 Ultra or Gemini 2.0. If Google has to compete with OpenAI, a substantial leap is required. 
                </p>   
                <a href='https://beebom.com/chatgpt-4o-vs-gemini-1-5-pro/' target="_blank" rel="noopener noreferrer"> Gemini Pro 1.5 Vs ChatGPT 4o</a>  
            </div>      
        </div>   
</div>
);
};

export default GeminiProVsGpt4o;