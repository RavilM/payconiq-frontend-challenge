export type TWithRequiredProperty<Type, Key extends keyof Type> = {
  [Property in Key]-?: Type[Property];
};
