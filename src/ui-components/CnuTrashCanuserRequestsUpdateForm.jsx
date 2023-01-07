/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { CnuTrashCanuserRequests } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function CnuTrashCanuserRequestsUpdateForm(props) {
  const {
    id: idProp,
    cnuTrashCanuserRequests,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    PK: "",
    SK: "",
  };
  const [PK, setPK] = React.useState(initialValues.PK);
  const [SK, setSK] = React.useState(initialValues.SK);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = cnuTrashCanuserRequestsRecord
      ? { ...initialValues, ...cnuTrashCanuserRequestsRecord }
      : initialValues;
    setPK(cleanValues.PK);
    setSK(cleanValues.SK);
    setErrors({});
  };
  const [cnuTrashCanuserRequestsRecord, setCnuTrashCanuserRequestsRecord] =
    React.useState(cnuTrashCanuserRequests);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(CnuTrashCanuserRequests, idProp)
        : cnuTrashCanuserRequests;
      setCnuTrashCanuserRequestsRecord(record);
    };
    queryData();
  }, [idProp, cnuTrashCanuserRequests]);
  React.useEffect(resetStateValues, [cnuTrashCanuserRequestsRecord]);
  const validations = {
    PK: [],
    SK: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          PK,
          SK,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            CnuTrashCanuserRequests.copyOf(
              cnuTrashCanuserRequestsRecord,
              (updated) => {
                Object.assign(updated, modelFields);
              }
            )
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "CnuTrashCanuserRequestsUpdateForm")}
      {...rest}
    >
      <TextField
        label="Pk"
        isRequired={false}
        isReadOnly={false}
        value={PK}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              PK: value,
              SK,
            };
            const result = onChange(modelFields);
            value = result?.PK ?? value;
          }
          if (errors.PK?.hasError) {
            runValidationTasks("PK", value);
          }
          setPK(value);
        }}
        onBlur={() => runValidationTasks("PK", PK)}
        errorMessage={errors.PK?.errorMessage}
        hasError={errors.PK?.hasError}
        {...getOverrideProps(overrides, "PK")}
      ></TextField>
      <TextField
        label="Sk"
        isRequired={false}
        isReadOnly={false}
        value={SK}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              PK,
              SK: value,
            };
            const result = onChange(modelFields);
            value = result?.SK ?? value;
          }
          if (errors.SK?.hasError) {
            runValidationTasks("SK", value);
          }
          setSK(value);
        }}
        onBlur={() => runValidationTasks("SK", SK)}
        errorMessage={errors.SK?.errorMessage}
        hasError={errors.SK?.hasError}
        {...getOverrideProps(overrides, "SK")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || cnuTrashCanuserRequests)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || cnuTrashCanuserRequests) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
