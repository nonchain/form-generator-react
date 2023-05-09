// Components
import { FormControl, Input, Grid, GridItem } from "@chakra-ui/react";
import Form from "../form/from";
// TS Configs
import {
  FormGeneratorInput,
  FormGeneratorProps,
  InputWidth,
} from "../../models/form-generator";

const inputWidth: InputWidth = {
  full: 2,
  normal: 1
}

function FormGenerator({ jsonFile }: FormGeneratorProps) {
  if (!jsonFile) return null;

  return (
    <Form>
      <Grid templateColumns='repeat(2, 1fr)' gap={4}>
        {jsonFile.map((input: FormGeneratorInput) => (
          <GridItem colSpan={inputWidth[input?.width]}>
            <FormControl>
              <Input
                id={input?.id}
                name={input?.name}
                type={input?.type}
                placeholder={input?.placeholder}
                sx={{
                  padding: "0.5rem 1rem",
                  width: "100%",
                  border: "2px solid #D4D4D4",
                  borderRadius: "0.25rem",

                  "&[type=\"number\"]::-webkit-inner-spin-button": {
                    display: "none"
                  }
                }}
              />
            </FormControl>
          </GridItem>
        ))}
      </Grid>
    </Form>
  );
}

export default FormGenerator;
