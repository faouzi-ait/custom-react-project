import React from 'react';
import PropTypes from 'prop-types';

/**
 * Reusable Button component with various variants and accessibility features.
 *
 * @component
 * @example
 * <Button
 *   variant="primary"
 *   onClick={() => console.log('Button clicked!')}
 *   ariaLabel="Primary Button"
 * >
 *   Primary Button
 * </Button>
 *
 * @param {Object} props - The properties of the Button component.
 * @param {string} props.variant - The visual style variant of the button. Can be 'primary', 'secondary', or 'danger'.
 * @param {Function} props.onClick - The function to be called when the button is clicked.
 * @param {string} props.ariaLabel - Accessible label for the button, used by screen readers.
 * @param {boolean} props.ariaHasPopup - Indicates whether the button opens a popup or menu.
 * @param {ReactNode} props.children - The content inside the button element.
 * @returns {ReactElement} React component representing a button.
 */
const Button = ({ variant, onClick, children, ariaLabel, ariaHasPopup }) => {
  // COMMENT HERE
  const getButtonClassName = () => {
    switch (variant) {
      case 'primary':
        return 'btn btn-primary';
      case 'secondary':
        return 'btn btn-secondary';
      case 'danger':
        return 'btn btn-danger';
      default:
        return 'btn btn-default';
    }
  };

  return (
    <button
      className={getButtonClassName()}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-haspopup={ariaHasPopup}
      role="button"
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  onClick: PropTypes.func,
  ariaLabel: PropTypes.string.isRequired,
  ariaHasPopup: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  variant: 'default',
  onClick: () => {},
  ariaHasPopup: false,
};

export default Button;
