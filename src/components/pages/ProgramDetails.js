import React from 'react';
import Image1 from '../../images/OIP.jpg'

const ProgramDetails = () => {
  return (
    <div style={{
        backgroundImage: `url(${Image1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '82vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
    
    
    <div style={{
        columnCount: 3,
        columnGap: '50px',
        columnRuleStyle: 'solid',
        columnRuleWidth: '2px',
        columnRuleColor: 'lightblue',     
        columnRuleStyle: 'solid' 
      }}>
      <h2 style={{columnSpan:'all', marginBottom:'16px', fontSize:'36px'}}>Job Oriented Program</h2> 
      <h2>Introducing Our Comprehensive 45-90 Day Structured Live Project Program</h2>
      <p>"Unlock Your Potential: Join Our Comprehensive Live Software Development Program Today!"</p>
      <p>LARAID SOFTWARE SOLUTIONS PRIVATE LIMITED welcomes you to embark on an enriching journey of skill enhancement and professional growth through our meticulously designed program. With a focus on cutting-edge technologies and hands-on learning, we aim to equip you with the tools and knowledge needed to excel in the dynamic world of software development.</p>
      
      <h3>Program Overview:</h3>
      <ul>
        <li>Duration: 45 to 90 days</li>
        <li>Technologies Covered:
          <ul>
            <li>Front-end: React, React Native, Node.js (Windows OS), Expo Go</li>
            <li>Back-end: Python, Flask</li>
            <li>Database: MySQL on AWS Linux 2/2023</li>
            <li>Cloud Computing: AWS Cloud with EC2, RDS</li>
          </ul>
        </li>
        <li>Schedule:
          <ul>
            <li>3 weeks for Front-end technologies</li>
            <li>2 weeks for Back-end development</li>
            <li>1 week dedicated to MySQL RDBMS</li>
            <li>1 week for hands-on experience with AWS Cloud (EC2, RDS)</li>
            <li>5-7 weeks allocated for a live project with lab assistance</li>
          </ul>
        </li>
        <li>Expertise:
          <ul>
            <li>Experienced lecturers with over 20 years of industry experience, including tenure in renowned MNCs such as IBM, Accenture, TCS, Amex, and State Farm, Sales Force, GuideWire.</li>
            <li>Faculty with international exposure and US return, bringing a global perspective to the learning experience.</li>
            <li>Guest lectures by esteemed working professionals, chief architects, and solution architects, offering invaluable insights from their real-world experiences.</li>
          </ul>
        </li>
        <li>Fee Structure: The program fee ranges from 1.2 Lakhs to 1.5 Lakhs.</li>
      </ul>
      
      <h3>Additional Benefits:</h3>
      <ul>
        <li>Resume Design Assistance: We provide guidance and support in crafting professional resumes tailored to the software development industry.</li>
        <li>Interview Preparation: Our experts offer assistance to help you prepare for job interviews, increasing your chances of securing lucrative opportunities.</li>
      </ul>
      
      <h3>Bonus Topics Covered:</h3>
      <ul>
        <li>Software Design Methodologies</li>
        <li>Requirement Gathering</li>
        <li>Creating Low Level Design Documents (LLDs) and High-Level Design Documents (HLDs)</li>
        <li>Architectural Patterns and Integration Patterns</li>
        <li>Mobile App Testing</li>
        <li>Tools and IDEs</li>
        <li>APPLE iOS App Development</li>
        <li>AI Tools (Chat GPT, Google BARD or Gemini and Microsoft Bing)</li>
      </ul>
      
      <h3>Why Choose Us:</h3>
      <ul>
        <li>Practical Learning</li>
        <li>Industry Relevance</li>
        <li>Live Project Experience</li>
        <li>Networking Opportunities</li>
        <li>Supportive Environment</li>
      </ul>
      
      <p>Join us at LARAID SOFTWARE SOLUTIONS PRIVATE LIMITED, located in Kompally, Hyderabad, and embark on a transformative learning experience that will propel your career to new heights. Unlock your potential and become a proficient developer equipped to tackle the challenges of tomorrow's technology landscape.</p>
      <p>“Embrace Confidence: Our program is designed to shatter the barriers holding you back from excelling in job interviews and performing your duties with unwavering confidence. Say goodbye to fears and hello to a future where you thrive.”</p>
      <p>“Empowering Future Developers: Discover Cutting-Edge Technologies with Us"</p>
      <p>"Transform Your Career: Learn from Seasoned Professionals with Global Experience”</p>
      
      <h3>You can reach us @</h3>
      <p>Mobile: 93478 39890 | 63005 44805</p>
      <p>Email: rajapinja@laraidsolutions.com | raja.pinja@gmail.com | raja_pinja@yahoo.com</p>
    </div>
    </div>
  );
}

export default ProgramDetails;
