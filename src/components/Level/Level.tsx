import { Grid, Heading, Text, Box, Flex } from "@radix-ui/themes";
import styles from "./Level.module.scss";
import DynamicIcon from "@/sanity/components/DynamicIcon";
import { Avatar } from "@radix-ui/themes";

interface LevelProps {
  data?: {
    heading?: string;
    text?: string;
    icon?: string;
    _key: string;
  }[] | undefined
}

function Level({ data }: LevelProps) {
  return (
    <Grid
      className={styles.Grid}
      columns="repeat(auto-fit, minmax(300px, 1fr))"
      gap="0"
      mt="9"
    >
      {data?.map(stat => (
        <Box 
          key={stat._key}
          className={styles.Item}
        >
          <Flex align="center" gap="2">
            <Avatar
              size="4"
              fallback={<DynamicIcon icon={stat.icon || ""} height="32px" width="32px" />}
              mb="4"
              color="orange"
            />
            <Heading as="h3" size="8" mb="2">{stat.heading}</Heading>
          </Flex>
          <Text as="p" size="3">{stat.text}</Text>
        </Box>
      ))}
    </Grid>
  )
}

export default Level;