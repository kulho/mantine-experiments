import { Highlight, Text, Title } from "@mantine/core";

const TextExample = () => {
  return (
    <div className="InputExample">
      <Title order={2} align="center">
        This is a title
      </Title>
      <Text
        size="lg"
        weight={700}
        underline
        transform="capitalize"
        align="center"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nulla
        quam aut sed corporis voluptates praesentium inventore,
        <Text
          variant="gradient"
          gradient={{ from: "red", to: "blue", deg: 138 }}
          size="xl"
          align="match-parent"
        >
          sapiente ex tempore sit consequatur debitis non!
        </Text>
        Illo cum ipsa reiciendis quidem facere, deserunt eos totam impedit. Vel
        ab, ipsum veniam aperiam odit molestiae incidunt minus, sint eos iusto
        earum quaerat vitae
      </Text>
      <Highlight
        align="center"
        highlight={["highlighted", "default"]}
        highlightStyles={(theme) => ({
          backgroundImage: theme.fn.linearGradient(
            45,
            theme.colors.cyan[5],
            theme.colors.indigo[5]
          ),
          fontWeight: 700,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        })}
      >
        You can change styles of highlighted part if you do not like default
        styles
      </Highlight>
    </div>
  );
};

export default TextExample;
