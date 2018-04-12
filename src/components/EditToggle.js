import React from 'react';

export default function EditToggle(props) {
  return (
    <select className="dropDownContainer ml0" onChange={(element) => props.update(element.target.value)}>
      <option value="true"> Allow Edit </option>
      <option value="false"> Disable Edit </option>
    </select>
  )
}