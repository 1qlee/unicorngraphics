export function TextColorIcon({ color }: { color: string }) { 
  return (
    <span style={{ color: color }}>T</span>
  )
}

export function TextColorDecorator(props: { color: string; children: React.ReactNode }) {
  return <span style={{ color: props.color }}>{props.children}</span>;
}