import { validate } from 'email-validator';

export function validateEmail(email: string): boolean {
  return validate(email);
}
