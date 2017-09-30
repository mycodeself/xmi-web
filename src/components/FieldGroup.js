import React from 'react'

import {FormGroup, Label, Input} from 'reactstrap'

const FieldGroup = ({ id, label, help, ...props }) => (
  <FormGroup fieldId={id}>
    <Label for={id}>{label}</Label>
    <Input {...props} id={id} />
  </FormGroup>
);

export default FieldGroup