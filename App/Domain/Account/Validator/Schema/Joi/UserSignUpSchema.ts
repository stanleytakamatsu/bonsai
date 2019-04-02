import * as Joi from 'joi';

const MinimumPasswordLength = 6;

const UserSignUpSchema = Joi.object().keys({
  Email: Joi.string()
    .email()
    .required(),
  Password: Joi.string()
    .min(MinimumPasswordLength)
    .required()
});

export { UserSignUpSchema };
