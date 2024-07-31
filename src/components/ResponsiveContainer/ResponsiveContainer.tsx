import { Container } from "@radix-ui/themes";
import { ComponentPropsWithoutRef, JSX, RefAttributes } from "react";

interface ContainerProps extends ComponentPropsWithoutRef<typeof Container> {
  children: React.ReactNode;
}

export default function ResponsiveContainer({ children, ...rest }: ContainerProps) {
  return (
    <Container
      px="4"
      {...rest}
    >
      {children}
    </Container>
  )
}