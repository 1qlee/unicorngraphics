import { Container } from "@radix-ui/themes";

export default function ResponsiveContainer({ children }: { children: React.ReactNode }) {
  return (
    <Container
      px={{
        initial: "4",
        lg: "0",
      }}
    >
      {children}
    </Container>
  )
}