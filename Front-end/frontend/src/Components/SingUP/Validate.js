/**
 * SignUpValidate
 * @param {[string]} newuser [inputs of user]
 * @returns {[errors]}  [error message when user input is invalid]
 */
function SignUpValidate(props) {
  const errors = {};

  if (!props.first_name) {
    errors.first_name = 'مطلوب';
  }

  if (!props.middle_name) {
    errors.middle_name = 'مطلوب';
  }

  if (!props.last_name) {
    errors.last_name = 'مطلوب';
  }

  if (!props.national_id) {
    errors.national_id = 'مطلوب';
  } else if (props.age.length < 14) {
    errors.age = 'الرقم القومي غير صحيح';
  }

  if (!props.email) {
    errors.email = 'مطلوب';
  } else if (!/\S+@\S+\.\S+/.test(props.email)) {
    errors.email = 'بريد إلكتروني خاطئ';
  }

  if (!props.password) {
    errors.password = 'مطلوب';
  } else if (props.password.length < 12) {
    errors.password = 'Please use at least: 12 characters';
  }

  return errors;
}

module.exports = SignUpValidate;
