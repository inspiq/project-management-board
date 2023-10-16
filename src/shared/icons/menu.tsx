import { SVGProps } from 'react'

export const MenuIcon = ({
  width = 20,
  height = 20,
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 256 256" width={width} height={height} {...props}>
    <path d="M144 192a16 16 0 1 1-16-16 16.018 16.018 0 0 1 16 16ZM128 80a16 16 0 1 0-16-16 16.018 16.018 0 0 0 16 16Zm0 32a16 16 0 1 0 16 16 16.018 16.018 0 0 0-16-16Z" />
  </svg>
)
