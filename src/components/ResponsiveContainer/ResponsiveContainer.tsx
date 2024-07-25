import { Container } from "@radix-ui/themes";

export default function ResponsiveContainer({ children }: { children: React.ReactNode }) {
  return (
    <Container
      px="4"
    >
      {children}
    </Container>
  )
}