export const checkValidityInput = (values, rules) => {
  let isValid = true;
  if (!rules) {
    return true;
  }
  if (rules.required) {
    isValid = values.trim() !== "" && isValid;
  }
  if (rules.minLength) {
    isValid = values.length >= rules.minLength && isValid;
  }
  if (rules.maxLength) {
    isValid = values.length <= rules.maxLength && isValid;
  }
  if (rules.isEmail) {
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    isValid = pattern.test(values) && isValid;
  }
  if (rules.minRange) {
    isValid = values >= rules.minRange && isValid;
  }
  if (rules.maxRange) {
    isValid = values <= rules.maxRange && isValid;
  }
  if (rules.isNumeric) {
    const pattern = /^\d+$/;
    isValid = pattern.test(values) && isValid;
  }
  if(rules.isPhone) {
    const pattern = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/;
    isValid = pattern.test(values) && isValid;
  }
  return isValid;
};

export const checked = (value, options) => {
  if (value !== true) {
    return options.message || 'must be checked';
  }
};





export const warn = values => {
  const warnings = {}
  if (values.age < 19) {
    warnings.age = 'Hmm, you seem a bit young...'
  }
  return warnings
}