// Next Imports
import dynamic from 'next/dynamic'
import { VercelLogoIcon } from '@radix-ui/react-icons'
import type { IconProps } from '@radix-ui/react-icons/dist/types'
import { Responsive } from '@radix-ui/themes/props'

type DynamicIconProps = {
  icon: string;
  height: string;
  width: string;
  style?: {};
}

type IconsMapping = {
  [key: string]: React.ComponentType<IconProps>
}

const DynamicIcon = ({ icon, height, width, style }: DynamicIconProps) => {
  const Icons: IconsMapping = {
    icons: dynamic(
      () =>
        import('@radix-ui/react-icons').then(mod => mod[icon]).then(e => (e === undefined ? VercelLogoIcon : e)) as Promise<
          React.ComponentType<IconProps>
        >
    ),
  }

  const Icon = icon ? Icons["icons"] : null

  return <>{Icon && <Icon style={style} height={height} width={width} />}</>
}

export default DynamicIcon