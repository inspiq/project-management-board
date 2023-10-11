import { SVGProps } from 'react'

export const CheckMarkIcon = ({
  width = 32,
  height = 32,
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 32 32"
    fill={props.color}
    {...props}>
    <g id="Layer_28" data-name="Layer 28">
      <path
        d="M16 31a15 15 0 1 1 15-15 15 15 0 0 1-15 15Zm0-28a13 13 0 1 0 13 13A13 13 0 0 0 16 3Z"
        className="cls-1"
      />
      <path
        d="M13.67 22a1 1 0 0 1-.73-.32l-4.67-5a1 1 0 0 1 1.46-1.36l3.94 4.21 8.6-9.21a1 1 0 1 1 1.46 1.36l-9.33 10a1 1 0 0 1-.73.32Z"
        className="cls-1"
      />
    </g>
  </svg>
)
