function Label({ label, name, checkedType, setCheckedType, onChangeType }) {
  return (
    <label>
      <input
        className="with-gap"
        name="group1"
        type="radio"
        data-name={name}
        checked={checkedType === name}
        onChange={(evt) => {
          const checkedType = evt.target.dataset.name;
          setCheckedType(checkedType);
          onChangeType(checkedType);
        }}
      />
      <span>{label}</span>
    </label>
  );
}

export default Label;
