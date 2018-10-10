const isEmpty = value => value === undefined || value === null || value === '';

const required = value => {
  if (isEmpty(value)) {
    return 'is required';
  }
  return '';
};

module.exports = {
  required
};
