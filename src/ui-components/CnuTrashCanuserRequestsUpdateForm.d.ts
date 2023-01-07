/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CnuTrashCanuserRequests } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CnuTrashCanuserRequestsUpdateFormInputValues = {
    PK?: string;
    SK?: string;
};
export declare type CnuTrashCanuserRequestsUpdateFormValidationValues = {
    PK?: ValidationFunction<string>;
    SK?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CnuTrashCanuserRequestsUpdateFormOverridesProps = {
    CnuTrashCanuserRequestsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    PK?: PrimitiveOverrideProps<TextFieldProps>;
    SK?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CnuTrashCanuserRequestsUpdateFormProps = React.PropsWithChildren<{
    overrides?: CnuTrashCanuserRequestsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    cnuTrashCanuserRequests?: CnuTrashCanuserRequests;
    onSubmit?: (fields: CnuTrashCanuserRequestsUpdateFormInputValues) => CnuTrashCanuserRequestsUpdateFormInputValues;
    onSuccess?: (fields: CnuTrashCanuserRequestsUpdateFormInputValues) => void;
    onError?: (fields: CnuTrashCanuserRequestsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CnuTrashCanuserRequestsUpdateFormInputValues) => CnuTrashCanuserRequestsUpdateFormInputValues;
    onValidate?: CnuTrashCanuserRequestsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CnuTrashCanuserRequestsUpdateForm(props: CnuTrashCanuserRequestsUpdateFormProps): React.ReactElement;
