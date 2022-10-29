// import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import { AppWrap } from './AppWrap.styled';
import { Section } from './Section/Section';
import Statistics from './Statistics';
import Notification from './Notification';
import { useState } from 'react';
// import { }

export const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  function incrementOption(e) {
    setState(prevState => ({ ...prevState, [e]: prevState[e] + 1 }));
  }

  const countTotalFeedback = () => {
    const { good, bad, neutral } = state;
    return good + bad + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = state;
    const total = countTotalFeedback();
    return Math.round((good / total) * 100) || 0;
  };

  // render() {
  //   const { good, neutral, bad } = this.state;
  //   const positive = this.countPositiveFeedbackPercentage();
  //   const total = this.countTotalFeedback();

  return (
    <AppWrap>
      <Section title={'Pleace leave feedback'}>
        <FeedbackOptions options={state} onLeaveFeedback={incrementOption} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={countTotalFeedback()}
            positive={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </AppWrap>
  );
};
// }
