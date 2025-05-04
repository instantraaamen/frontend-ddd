import React from 'react';
import { Button } from "./Button";

const About: React.FC = () => (
  <div>
    <h1>About</h1>
      <Button label="テストボタン" onClick={() => alert("クリックされました")} />
  </div>
);
export default About;
