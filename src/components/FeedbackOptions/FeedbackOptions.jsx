import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return Object.keys(options).map(key => (
    <Button type="button" key={key} onClick={() => onLeaveFeedback(key)}>
      {key}
    </Button>
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
