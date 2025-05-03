import React from 'react';
import { Button } from "./Button";

const About: React.FC = () => (
  <div>
    <h1>About</h1>
    <p>This is the About page.</p>
    
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Button label="テストボタン" onClick={() => alert("クリックされました")} />
    </div>
  </div>
);
export default About;
