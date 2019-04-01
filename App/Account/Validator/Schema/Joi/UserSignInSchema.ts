import * as Joi from 'joi';

const MinimumPasswordLength = 6;

const UserSignInSchema = Joi.object().keys({
  Email: Joi.string()
    .email()
    .required(),
  Password: Joi.string()
    .min(MinimumPasswordLength)
    .required()
});

export { UserSignInSchema };
