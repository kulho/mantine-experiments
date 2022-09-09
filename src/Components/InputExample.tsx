import { Input, TextInput } from "@mantine/core";
import { IconBrandGithub, IconBrandNotion } from "@tabler/icons";

const InputExample = () => {
  return (
    <div className="InputExample">
      <TextInput
        icon={<IconBrandGithub />}
        rightSection={<IconBrandNotion />}
        label="This is some input field"
        description="This is some description"
        error="some error"
        required
      />
      <Input component="select" />
    </div>
  );
};

export default InputExample;
