import React, { forwardRef, useImperativeHandle } from "react";

interface IFormProps {
  initialData?: string;
}

export interface IFormRef {
  submit(): void;
}

const Form: React.RefForwardingComponent<IFormRef, IFormProps> = (
  props,
  ref
) => {
  function submit() {
    alert("submit");
  }

  useImperativeHandle(ref, () => ({
    submit,
  }));

  return (
    <form>
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
    </form>
  );
};

export default forwardRef(Form);
