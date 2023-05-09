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
} from "@chakra-ui/react";
import Form from "../form/from";
// TS Configs
import {
  FormGeneratorInput,
  FormGeneratorProps,
  InputWidth,
} from "../../models/form-generator";

const inputWidth: InputWidth = {
  full: 2,
  normal: 1,
};

function FormGenerator({ jsonFile }: FormGeneratorProps) {
  if (!jsonFile) return null;
  const { inputs, radios: { groups } } = jsonFile;
  const RadioGroups = Object.keys(groups)?.map((group) => groups[group]);

  return (
    <Form>
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        {inputs?.map((input: FormGeneratorInput) => (
          <GridItem key={input.id} colSpan={inputWidth[input?.width]}>
            <FormControl>
              <FormLabel>{input?.title}</FormLabel>
              <Input
                id={input?.id}
                name={input?.name}
                type={input?.type}
                placeholder={input?.placeholder}
              />
            </FormControl>
          </GridItem>
        ))}
        {RadioGroups?.map((radioGroup) => (
          <GridItem key={radioGroup?.id} colSpan={2}>
            <FormControl>
              <FormLabel>{radioGroup?.title}</FormLabel>
              <RadioGroup value={radioGroup.data?.[0].value}>
                <Stack
                  alignItems="center"
                  gap="1rem"
                  direction="row"
                >
                  {radioGroup?.data?.map((radio) => (
                    <Radio key={radio?.id} value={radio?.value}>{radio?.title}</Radio>
                  ))}
                </Stack>
              </RadioGroup>
            </FormControl>
          </GridItem>
        ))}
      </Grid>
    </Form>
  );
}

export default FormGenerator;
