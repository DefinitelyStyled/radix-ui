import React from 'react';
import * as RadixForm from '@radix-ui/react-form';
import { st, classes } from './form.st.css';

export const Form: typeof RadixForm.Root = React.forwardRef(function Form(props, forwardRef) {
    return (
        <RadixForm.Root ref={forwardRef} {...props} className={st(classes.root, props.className)} />
    );
});

export const FormField: typeof RadixForm.Field = React.forwardRef(function Field(
    props,
    forwardRef
) {
    return (
        <RadixForm.Field
            ref={forwardRef}
            {...props}
            className={st(classes.field, props.className)}
        />
    );
});

export const FormLabel: typeof RadixForm.Label = React.forwardRef(function Label(
    props,
    forwardRef
) {
    return (
        <RadixForm.Label
            ref={forwardRef}
            {...props}
            className={st(classes.label, props.className)}
        />
    );
});

export const FormControl: typeof RadixForm.Control = React.forwardRef(function Control(
    props,
    forwardRef
) {
    return (
        <RadixForm.Control
            ref={forwardRef}
            {...props}
            className={st(classes.control, props.className)}
        />
    );
});

export const FormMessage: typeof RadixForm.Message = React.forwardRef(function Message(
    props,
    forwardRef
) {
    return (
        <RadixForm.Message
            ref={forwardRef}
            {...props}
            className={st(classes.message, props.className)}
        />
    );
});

export const FormValidityState: {
    (props: RadixForm.ScopedProps<RadixForm.FormValidityStateProps>): JSX.Element;
    displayName: string;
} = RadixForm.FormValidityState;

export const FormSubmit: typeof RadixForm.Submit = React.forwardRef(function Submit(
    props,
    forwardRef
) {
    return (
        <RadixForm.Submit
            ref={forwardRef}
            {...props}
            className={st(classes.submit, props.className)}
        />
    );
});

/* 
<Form.Root>
    <Form.Field>
        <Form.Label />
        <Form.Control />
        <Form.Message />
        <Form.ValidityState />
    </Form.Field>

    <Form.Message />
    <Form.ValidityState />

    <Form.Submit />
</Form.Root>
*/
