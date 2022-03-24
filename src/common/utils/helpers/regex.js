import { SPECIAL_CHARACTER_REGEX } from "../../constants/regexFormats";

export const hasSpecialCharacters = (string) => {
  if (SPECIAL_CHARACTER_REGEX.test(string)) {
    return true;
  } else {
    return false;
  }
};
