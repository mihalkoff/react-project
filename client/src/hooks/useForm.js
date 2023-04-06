import { useState } from "react";

export const useForm = (initialValues, onSubmitHandler) => {
    const [formValues, setFormValues] = useState(initialValues);

    const onChangeHandler = (e) => {
        setFormValues(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (onSubmitHandler) {
            onSubmitHandler(formValues);
        }
    };

    const changeFormValues = (newFormValues) => {
        // TODO: Validate newValues shape (like initialValues)
        
        setFormValues(newFormValues);
    };

    return {
        formValues,
        onChangeHandler,
        onSubmit,
        changeFormValues,
    };
};