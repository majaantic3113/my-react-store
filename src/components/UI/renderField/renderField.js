import React from 'react';

const renderField = ({
    input,
    label,
    type,
    faClass,
    placeholder,
    meta: { touched, error, warning }
}) =>
    <div className="form-group">
        <label className="control-label">
            {label}
        </label>
        <div>
            <div className="input-group">
                <span className="input-group-addon">
                    <i className={faClass} aria-hidden="true" />
                </span>
                <input
                    {...input}
                    type={type}
                    className="form-control"
                    name="name"
                    placeholder={placeholder}
                />
                {touched &&
                    ((error &&
                        <span>
                            {error}
                        </span>) ||
                        (warning &&
                            <span>
                                {warning}
                            </span>))}
            </div>
        </div>
    </div>;

export default renderField;