import { SVGProps } from 'react'

export const PlusIcon = ({
  width = 50,
  height = 50,
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg width={width} height={height} viewBox="0 0 50 50" fill="none" {...props}>
    <path d="M0 0h50v50H0z" />
    <path
      stroke={props.color ?? '#000'}
      strokeMiterlimit={10}
      strokeWidth={4}
      d="M9 25h32M25 9v32"
    />
  </svg>
)
