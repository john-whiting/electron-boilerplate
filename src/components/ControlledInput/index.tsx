import { cloneElement, FC, ReactElement, useCallback } from 'react';
import {
  Control,
  Controller,
  ControllerFieldState,
  ControllerRenderProps,
  FieldPathValue,
  RegisterOptions,
  UnpackNestedValue,
  UseFormStateReturn,
} from 'react-hook-form';

export type ControlledInputProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any, any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  name: any;
  rules?: Omit<
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    RegisterOptions<any, any>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
  shouldUnregister?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  defaultValue?: UnpackNestedValue<FieldPathValue<any, any>>;
  children: ReactElement;
};

type RenderFunctionInput = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  field: ControllerRenderProps<any, string>;
  fieldState: ControllerFieldState;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formState: UseFormStateReturn<any>;
};

const ControlledInput: FC<ControlledInputProps> = ({ children, ...props }) => {
  const rendered = useCallback(
    ({ field }: RenderFunctionInput): ReactElement =>
      cloneElement(children, { ...field }),
    [children],
  );

  return <Controller {...props} render={rendered} />;
};
export default ControlledInput;
