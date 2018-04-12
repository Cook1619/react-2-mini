import React from 'react';

export default function FamilyChanger(props) {
  return (
    <select className="dropDownContainer" onChange={(element) => props.update(element.target.value)} disabled={props.allowEdit === 'false'}>
      <option value="monospace"> Monospace </option>
      <option value="arial"> Arial </option>
      <option value="courier"> Courier </option>
    </select>
  )
}