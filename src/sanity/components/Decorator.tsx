export function TextColorIcon({ color, backgroundColor }: { color: string, backgroundColor?: string }) { 
  return (
    <span style={{ color: color, backgroundColor: backgroundColor }}>T</span>
  )
}

export function TextColorDecorator(props: { color: string; backgroundColor?: string, children: React.ReactNode }) {
  return <span style={{ color: props.color, backgroundColor: props.backgroundColor }}>{props.children}</span>;
}