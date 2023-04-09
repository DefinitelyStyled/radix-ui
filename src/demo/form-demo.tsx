import React from 'react';
import { classes } from './form-demo.st.css';
import {
    Form,
    FormControl,
    FormField,
    FormLabel,
    FormMessage,
    FormSubmit,
} from '../components/form/form';

interface FormDemoProps {
    className?: string;
}

const FormDemo: React.FunctionComponent<FormDemoProps> = () => (
    <Form>
        <FormField name="email">
            <div
                style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}
            >
                <FormLabel>Email</FormLabel>
                <FormMessage match="valueMissing">Please enter your email</FormMessage>
                <FormMessage match="typeMismatch">Please provide a valid email</FormMessage>
            </div>
            <FormControl asChild>
                <input className={classes.input} type="email" required />
            </FormControl>
        </FormField>
        <FormField name="question">
            <div
                style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}
            >
                <FormLabel>Question</FormLabel>
                <FormMessage match="valueMissing">Please enter a question</FormMessage>
            </div>
            <FormControl asChild>
                <textarea className={classes.textarea} required />
            </FormControl>
        </FormField>
        <FormSubmit asChild>
            <button className={classes.button} style={{ marginTop: 10 }}>
                Post question
            </button>
        </FormSubmit>
    </Form>
);

export default FormDemo;
