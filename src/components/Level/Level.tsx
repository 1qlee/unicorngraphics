import { Grid, Heading, Text, Box, Flex } from "@radix-ui/themes";
import styles from "./Level.module.scss";

type Color = "lime" | "orange" | "indigo";

interface LevelProps {
  data?: {
    heading?: string;
    text?: string;
    icon?: string;
    _key: string;
  }[] | undefined;
  color: Color;
}

function Level({ data, color }: LevelProps) {
  return (
    <Grid
      className={styles.Grid}
      columns="repeat(auto-fit, minmax(300px, 1fr))"
      gap="4"
      mt="9"
    >
      {data?.map(stat => (
        <Flex
          key={stat._key}
          className={styles.Item}
          gap="2"
        >
          <Flex align="start" gap="2">
            <Box>
              <Heading as="h3" size="6" mb="2" weight="medium">{stat.heading}</Heading>
              <Text as="p" size="3" color="gray">{stat.text}</Text>
            </Box>
          </Flex>
        </Flex>
      ))}
    </Grid>
  )
}

export default Level;