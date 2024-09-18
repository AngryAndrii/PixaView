import { ChangeEvent, ChangeEventHandler, FormEvent, FormEventHandler } from 'react';

export type changeEvent = ChangeEvent<HTMLInputElement>;
export type submitEvent = FormEvent<HTMLFormElement>;
export type changeHandler = ChangeEventHandler<HTMLInputElement>;
export type submitHandler =  FormEventHandler<HTMLFormElement>;