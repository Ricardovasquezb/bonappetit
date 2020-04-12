import React from 'react';
import Lodash from 'lodash';
import { Field, FastField } from 'formik';

// Components
import TableInput from '../TablesInput';

const objInputs = {
  tablesInput: TableInput
};

const FormikInput = props => {
  const { type } = props;
  const InputComponent = objInputs[type] || objInputs.text;
  const isSubmitting = Lodash.get(props, ['form', 'isSubmitting'], null) || false;
  const listFieldName = Lodash.get(props, ['field', 'name'], '').split('.');
  const strError = Lodash.get(props, ['form', 'errors', ...listFieldName], null);
  const value = Lodash.get(props, ['field', 'value'], null);

  const handleOnChange = varValue => {
    const { field, form } = props;
    if (Lodash.isString(varValue)) {
      return field.onChange(field.name)(varValue);
    }
    return form.setFieldValue(field.name, varValue, true);
  };

  return (
    <InputComponent
      disabled={isSubmitting}
      value={value}
      {...props}
      onChange={handleOnChange}
      hasError={strError}
      helperText={strError}
    />
  );
};

export default objProps => {
  if (objProps.plainInput) {
    return <FormikInput {...objProps} />;
  }

  if (objProps.withoutFastField) {
    return <Field component={FormikInput} {...objProps} />;
  }

  return <FastField component={FormikInput} {...objProps} />;
};
