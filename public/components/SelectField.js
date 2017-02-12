import React from 'react';

const SelectFieldGroup = ({ label, error, children, ...props }) => {

const styles = {
    formGroup: {
      marginBottom: '15px'
    },
    inlineLabel: {
      position: 'relative'
    },
    fieldSet: {
      position: 'relative',
      marginBottom: '15px',
      boxSizing: 'border-box',
      minWidth: 0,
      padding: 0,
      margin: 0,
      border: 0
    },
    label: {
      position: 'absolute',
      top: 0,
      fontSize: '12px',
      color: '#00A1DF',
      fontWeight: '100',
      padding:'2px 9px',
      letterSpacing: '1px',
      display: 'inline-block',
      maxWidth: '100%',
      marginBottom: '5px'
    },
    formControl: {
      paddingTop: '24px',
      height: 'auto',
      display: 'block',
      width: '32%',
      padding: '16px 9px 3px',
      fontSize: '20px',
      lineHeight: '1.42857143',
      letterSpacing: '1px',
      color: '#555',
      border: '1px solid #ccc',
      backgroundColor: '#fff',
      borderRadius: 0,
      WebkitAppearance: 'none'
    }
};
  
  return (
    <div style={styles.fieldSet}>
      <select style={styles.formControl}
        type="select"
        {...props}>
         {children}
        </select>

      <label style={styles.label}>{label}</label> <br />
      
    {props.touched && props.error && <span className="error">{props.error}</span>}
    </div>  );
}



SelectFieldGroup.propTypes = {
  label: React.PropTypes.string.isRequired,
  error: React.PropTypes.bool,
}

SelectFieldGroup.defaultProps = {
  type: 'text'
}

export default SelectFieldGroup;