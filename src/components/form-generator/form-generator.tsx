// Libraries
import { useForm } from "react-hook-form";
// Components
import {
  FormControl,
  Input,
  RadioGroup,
  Radio,
  Grid,
  GridItem,
  Stack,
  FormLabel,
  FormErrorMessage,
  Button,
} from "@chakra-ui/react";
import Form from "../form/from";
// TS Configs
import {
  FormGeneratorInput,
  FormGeneratorProps,
  InputWidth,
} from "../../models/form-generator";
import { ReactNode } from "react";

const inputWidth: InputWidth = {
  full: 2,
  normal: 1,
};

function FormGenerator({ jsonFile }: FormGeneratorProps) {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isSubmitted, isSubmitSuccessful },
  } = useForm();

  // Check the json file
  if (!jsonFile) return null;
  const {
    inputs,
    radios: { groups },
  } = jsonFile;
  const RadioGroups = Object.keys(groups)?.map((group) => groups[group]);

  // Get form inputs data
  const onSubmit = (values: object) => {
    console.log(JSON.stringify(values));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        {/*==================== Build Inputs ====================*/}
        {inputs?.map((input: FormGeneratorInput) => (
          <GridItem key={input.id} colSpan={inputWidth[input?.width]}>
            <FormControl isInvalid={!!(errors?.[input?.name])}>
              <FormLabel>{input?.title}</FormLabel>
              <Input
                id={input?.id}
                type={input?.type}
                placeholder={input?.placeholder}
                {...register(input?.name,  {
                  required: input?.validation?.required,
                  pattern: input?.validation?.pattern,
                  valueAsNumber: input?.validation?.valueAsNumber,
                  minLength: input?.validation?.minLength,
                  maxLength: input?.validation?.maxLength
                })}
              />
              <FormErrorMessage>
                {errors[input?.name]?.message as ReactNode}
              </FormErrorMessage>
            </FormControl>
          </GridItem>
        ))}
        {/*==================== Build Radio Buttons ====================*/}
        {RadioGroups?.map((radioGroup) => (
          <GridItem key={radioGroup?.id} colSpan={2}>
            <FormControl isInvalid={isSubmitted && !isSubmitSuccessful}>
              <FormLabel>{radioGroup?.title}</FormLabel>
              <RadioGroup>
                <Stack alignItems="center" gap="1rem" direction="row">
                  {radioGroup?.data?.map((radio) => (
                    <Radio
                      key={radio?.id}
                      value={radio.value}
                      {...register(radio.name, { required: true })}
                    >
                      {radio?.title}
                    </Radio>
                  ))}
                </Stack>
              </RadioGroup>
              <FormErrorMessage>Please select one the options</FormErrorMessage>
            </FormControl>
          </GridItem>
        ))}
      </Grid>
      {/*==================== Submit Button ====================*/}
      <Button type="submit" mt="2rem" isLoading={isSubmitting}>
        Submit
      </Button>
    </Form>
  );
}

export default FormGenerator;
