import PropTypes from 'prop-types';

export const QuoteComponent = ({ name, species }) => {
  return (
    <blockquote className='blockquote text-center'>
      <p className='mb-2'>{name}</p>
      <footer className='blockquote-footer'>{species}</footer>
    </blockquote>
  );
};

QuoteComponent.propTypes = {
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
};
