import { BUTTON_VARIANTS, VARIANT_TO_CLASSNAME } from "../constants";

export const getClassName = (variant) => {
  const classNameForVariant = VARIANT_TO_CLASSNAME[variant];

  if (classNameForVariant) {
    return classNameForVariant;
  } else {
    const defaultVariant = VARIANT_TO_CLASSNAME[BUTTON_VARIANTS.PRIMARY];
    return defaultVariant;
  }
};
