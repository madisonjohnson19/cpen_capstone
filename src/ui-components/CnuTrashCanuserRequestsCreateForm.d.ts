/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CnuTrashCanuserRequestsCreateFormInputValues = {
    PK?: string;
    SK?: string;
};
export declare type CnuTrashCanuserRequestsCreateFormValidationValues = {
    PK?: ValidationFunction<string>;
    SK?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CnuTrashCanuserRequestsCreateFormOverridesProps = {
    CnuTrashCanuserRequestsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    PK?: PrimitiveOverrideProps<TextFieldProps>;
    SK?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CnuTrashCanuserRequestsCreateFormProps = React.PropsWithChildren<{
    overrides?: CnuTrashCanuserRequestsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CnuTrashCanuserRequestsCreateFormInputValues) => CnuTrashCanuserRequestsCreateFormInputValues;
    onSuccess?: (fields: CnuTrashCanuserRequestsCreateFormInputValues) => void;
    onError?: (fields: CnuTrashCanuserRequestsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CnuTrashCanuserRequestsCreateFormInputValues) => CnuTrashCanuserRequestsCreateFormInputValues;
    onValidate?: CnuTrashCanuserRequestsCreateFormValidationValues;
} & React.CSSProperties>;
export default function CnuTrashCanuserRequestsCreateForm(props: CnuTrashCanuserRequestsCreateFormProps): React.ReactElement;
