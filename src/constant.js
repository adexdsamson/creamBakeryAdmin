export const query = ({
  width
}) => {
  if (width < 575) {
    return {
      breakpoint: 'xs'
    };
  }

  if (576 < width && width < 767) {
    return {
      breakpoint: 'sm'
    };
  }

  if (768 < width && width < 991) {
    return {
      breakpoint: 'md'
    };
  }

  if (992 < width && width < 1199) {
    return {
      breakpoint: 'lg'
    };
  }

  if (width > 1200) {
    return {
      breakpoint: 'xl'
    };
  }

  return {
    breakpoint: 'xs'
  };
};