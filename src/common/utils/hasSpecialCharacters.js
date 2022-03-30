export const hasSpecialCharacters = (string) => {
  const specialCharacterRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/
  const isSpecialCharPresent = specialCharacterRegex.test(string)
  return isSpecialCharPresent
};