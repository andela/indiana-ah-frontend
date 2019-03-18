export const signUpFormSchema = {
  email: /[-.\w]+@([\w-]+\.)+[\w-]{2,20}/,
  username: /^(?=.*[a-zA-Z])\S{3,}$/,
  password: /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]{8,})$/
};

export const validationMessages = {
  email: 'Please enter a valid email address',
  username:
    'Username must be at least 3 characters long and must include at least an alphabet',
  password:
    'Password must contain alphabets and numbers and must be at least 8 characters long'
};
