export function modifyCheckboxValue(
  checkbox: HTMLInputElement,
  values: string[],
) {
  const { value } = checkbox;
  if (value) {
    if (checkbox.checked && values.includes(value) === false) {
      values.push(value);
    } else {
      const pos: number = values.indexOf(value);
      if (checkbox.checked === false && pos >= 0) {
        values.splice(pos, 1);
      }
    }
  }

  return [...values];
}
