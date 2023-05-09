// Components
import { Stack } from "@chakra-ui/react";
import FormGenerator from "./components/form-generator/form-generator"
// Files
import formJson from "./dummy-form-json.json";

function App() {
  return (
    <Stack minHeight="100vh" alignItems="center" justifyContent="center">
      <FormGenerator jsonFile={formJson}/>
    </Stack>
  )
}

export default App