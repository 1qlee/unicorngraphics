import { Grid, Heading, Text, Box } from "@radix-ui/themes";
import styles from "./Level.module.scss";

interface LevelProps {
  data?: {
    heading?: string;
    text?: string;
    _key: string;
  }[] | undefined
}

function Level({ data }: LevelProps) {
  return (
    <Grid
      columns="4"
      gap="4"
      mt="9"
    >
      {data?.map(stat => (
        <Box 
          key={stat._key}
          className={styles.LevelItem}
        >
          <Heading as="h3" size="6" mb="2">{stat.heading}</Heading>
          <Text color="gray" size="3">{stat.text}</Text>
        </Box>
      ))}
    </Grid>
  )
}

export default Level;