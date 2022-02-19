

const SelectInput = ({ label, value, onChange, options, className }) => {
  // return (
  //   // <div>
  //   //     {label}
  //   //     <select value={value}  onChange={(e) => onChange(e.target.value)}>
  //   //         {options.map(option => (
  //   //             <option key={option.value} value={option.value}>{option.label}</option>
  //   //         ))}
  //   //     </select>
  //   // </div>
  //   <div className="control has-icons-left">
  //       <div className="select is-rounded">
  //           <select value={value} onChange={(e) => onChange(e.target.value)}>
  //                 {options.map(option => (<option key={option.value} value={option.value}>{option.label}</option>))}
  //           </select>
  //       </div>
  //       <div className="icon is-small is-left">
  //                   <i><FontAwesomeIcon style={{ fontSize: "15px" }} icon={faCode}></FontAwesomeIcon></i>
  //       </div>
  //   </div>
  // )

  const selectClass = className ? `${className} field` : 'field';

  return (
    <div className={selectClass}>
      <div className="control">
        <label className="label">{label}</label>
        <div className="select is-primary">
          <select value={value} onChange={(e) => onChange(e.target.value)}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );


}

export default SelectInput