// Components
import { Box, Stack } from "@chakra-ui/react";
import FormGenerator from "./components/form-generator/form-generator";
// Files
import formJson from "./dummy-form-json.json";

function App() {
  return (
    <Stack minHeight="100vh" alignItems="center" justifyContent="center">
      <Box width="40%">
        <FormGenerator jsonFile={formJson} />
      </Box>
    </Stack>
  );
}

export default App;
