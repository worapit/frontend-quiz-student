// import { API_URL } from "@/utils/api";
import { useSetState } from "@mantine/hooks";
import { Input, Button, Card, Title, Stack } from "@mantine/core";
import { Donation } from "@/utils/types";

export default function Form() {

  return (
    <Card withBorder shadow="xs" p="xl" bg="cyan.2">
      <Title order={1} color="blue">
        Donate
      </Title>

      <form>
        <Stack spacing={"xs"}>
          <Input.Wrapper>
            <Input.Label>First Name</Input.Label>
            <Input />
            <Input.Error>{/* Error goes here */}</Input.Error>
          </Input.Wrapper>

          <Input.Wrapper>
            <Input.Label>Last Name</Input.Label>
            <Input />
            <Input.Error>{/* Error goes here */}</Input.Error>
          </Input.Wrapper>

          <Input.Wrapper>
            <Input.Label>Email</Input.Label>
            <Input />
            <Input.Error>{/* Error goes here */}</Input.Error>
          </Input.Wrapper>

          <Input.Wrapper>
            <Input.Label>Donation Amount</Input.Label>
            <Input />
            <Input.Error>{/* Error goes here */}</Input.Error>
          </Input.Wrapper>
          <Button>Submit</Button>
        </Stack>
      </form>
    </Card>
  );
}
