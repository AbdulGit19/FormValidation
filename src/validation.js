import validator from "validator";

export function ValidateData(data, rules) {
  let errors = {};

  Object.keys(data).forEach(field => {
    if (rules.hasOwnProperty(field)) {
      let fielderrors = [];
      let val = data[field];

      if (rules[field].true) {
        if (!val) {
          fielderrors.push("Must be checked");
        }
      } else {
        if (rules[field].required && validator.isEmpty(val)) {
          fielderrors.push("value required");
        }
        if (!validator.isEmpty(val)) {
          if (
            rules[field].minlength &&
            !validator.isLength(val, rules[field].minlength)
          ) {
            fielderrors.push(
              `Enter atleast ${rules[field].minlength} characters`
            );
          }
          // if (rules[field].alpha && !validator.alpha(val)) {
          //   fielderrors.push("Enter only letters");
          // }
          if (rules[field].email && !validator.isEmail(val)) {
            fielderrors.push("Enter a valid email address");
          }
        }
      }
      if (fielderrors.length > 0) {
        errors[field] = fielderrors;
      }
    }
  });
  return errors;
}
