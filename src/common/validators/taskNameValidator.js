import { TASK_INPUT_LIMIT } from "../../components/CreateTask/constants/createTask.general";
import {
  SPECIAL_CHARACTERS_NOT_ALLOWED,
  TASK_INPUT_LIMIT_EXCEEDED,
} from "../../components/CreateTask/constants/errorMessages";
import { hasSpecialCharacters } from "../utils/hasSpecialCharacters";

export const taskNameValidator = (taskName) => {

  if (hasSpecialCharacters(taskName))
    return { isValid: false, err: SPECIAL_CHARACTERS_NOT_ALLOWED };

  if (taskName >= TASK_INPUT_LIMIT)
    return { isValid: false, err: TASK_INPUT_LIMIT_EXCEEDED };

  return { isValid: true, err: "" };
};
