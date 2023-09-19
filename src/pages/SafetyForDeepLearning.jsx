import React from 'react';

import { Article } from '../components/articles/Article';

const SafetyForDeepLearning = () => {
  return (
    <main className="main">
      <Article
        title={'Safety for Deep Learning'}
        subtitle={'Validation and Testing for Automotive Perception'}
      >
        <h3 id="introduction">Curious?</h3>
        <p>
          Great to see that you're curious. Unfortunately, there's
          nothing here yet. But the lecture material might be moved
          here, too.
        </p>
      </Article>
    </main>
  );
};

export { SafetyForDeepLearning };
