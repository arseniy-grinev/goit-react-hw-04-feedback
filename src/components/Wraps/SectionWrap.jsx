import PropTypes from 'prop-types';
import { Section, Title } from './SectionWrap.styled';

export const SectionWrap = ({ title, children }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}
      {children}
    </Section>
  );
};

SectionWrap.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
