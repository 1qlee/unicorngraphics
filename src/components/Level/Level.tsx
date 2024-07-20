import { Grid, Heading, Text, Box } from "@radix-ui/themes";

function Level() {
  return (
    <Grid
      columns="4"
    >
      <Box>
        <Heading>Experience</Heading>
        <Text color="gray">35 years and counting</Text>
      </Box>
    </Grid>
  )
}

export default Level;