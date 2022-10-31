const REQUIRED_FIELD = 'Required to fill in';

export const emailValidation = (value) => {
  if(value.length === 0) {
    return REQUIRED_FIELD;
  }
  if(!value.match('@')) {
    return 'Enter the correct value';
  }
  if(value.match(/[а-яА-Я]/)) {
    return 'Email cannot contain Cyrillic';
  }
  return true;
}

export const passwordValidation = (value) => {
  if(value.length === 0) {
    return REQUIRED_FIELD;
  }
  if(value.length >= 1 && value.length <= 5) {
    return 'Password must contain at least 6 characters';
  }
  return '';
}