import React from 'react';

import Slider from '../../components/Slider';
import Services from '../../components/Services';
import About from '../../components/About';
import StepByStep from '../../components/StepByStep';
import Form from '../../components/Form';
import Data from '../../components/Data';

export default function Home() {
  return (
    <main>
      <Slider />
      <Services />
      <About />
      <StepByStep />
      <Form />
      <Data />
    </main>
  );
}
