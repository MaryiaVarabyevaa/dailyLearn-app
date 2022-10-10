const REQUIRED_FIELD = 'required to fill in';

export const emailValidation = {
    required: REQUIRED_FIELD,
    validate: (value) => {
      
       if(value.match(/[а-яА-Я]/)) {
         return 'email cannot contain Cyrillic';
       }
       if(!value.match('@')) {
         return 'enter the correct value';
       }

      return true;
    }
}

export const passwordValidation = {
    required: REQUIRED_FIELD,
    validate: (value) => {

        if(value.length < 6) {
            return 'password must contain at least 6 characters';
        }

        return true;
    }
}