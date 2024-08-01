import { Section } from "@radix-ui/themes";
import styles from "./PaddedSection.module.scss";

interface SectionProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export default function PaddedSection({ children, style }: SectionProps) {
  return (
    <Section 
      className={styles.Section}
      style={style}
    >
      {children}
    </Section>
  )
}