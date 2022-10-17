import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import { AppWrap } from './AppWrap.styled';
import { SectionWrap } from './Wraps/SectionWrap';
import Statistics from './Statistics';
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
    const { bad } = this.state;
    const total = this.countTotalFeedback();
    return Math.round(((total - bad) / total) * 100) || 0;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const positive = this.countPositiveFeedbackPercentage();
    const total = this.countTotalFeedback();

    return (
      <AppWrap>
        <SectionWrap title={'Pleace leave feedback'}>
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.incrementOption}
          />
        </SectionWrap>
        <SectionWrap title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positive={positive}
          />
        </SectionWrap>
      </AppWrap>
    );
  }
}
