import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import { AppWrap } from './AppWrap.styled';
import { Section } from './Section/Section';
import Statistics from './Statistics';
import Notification from './Notification';
// import { }

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementOption = e => {
    this.setState(prevState => ({
      [e]: prevState[e] + 1,
    }));
  };

  countTotalFeedback() {
    const { good, bad, neutral } = this.state;
    return good + bad + neutral;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return Math.round((good / total) * 100) || 0;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const positive = this.countPositiveFeedbackPercentage();
    const total = this.countTotalFeedback();

    return (
      <AppWrap>
        <Section title={'Pleace leave feedback'}>
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.incrementOption}
          />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positive={positive}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </AppWrap>
    );
  }
}
