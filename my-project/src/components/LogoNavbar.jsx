import * as React from "react"

const LogoNavbar = (props) => (
  <svg
    width={68}
    height={59}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#a)">
      <path
        d="M56.912 2.571h-3.304V0h-3.304v2.571H40.39V0h-3.305v2.571h-3.304c-1.822 0-3.304 1.154-3.304 2.572v18c0 1.418 1.481 2.571 3.304 2.571h23.13c1.823 0 3.305-1.153 3.305-2.571v-18c0-1.418-1.482-2.572-3.305-2.572ZM55.26 21.857h-9.913v-7.714h9.913v7.714ZM56.912 9h-23.13V6.429h23.13V9Z"
        fill="#440298"
      />
    </g>
    <path
      d="m50.987 18.265-3.397-3.23-1.46 1.387 4.857 4.617L61 11.517l-1.458-1.387-8.555 8.135Z"
      fill="#7F39D9"
    />
    <g filter="url(#b)">
      <path
        d="M38.304 28.61v-6.986c0-6.267-4.275-11.547-10.066-13.134a3.894 3.894 0 0 0-3.63-2.45 3.894 3.894 0 0 0-3.629 2.45c-5.791 1.59-10.066 6.867-10.066 13.133v6.986l-3.34 3.325A1.94 1.94 0 0 0 7 33.313v3.896c0 .517.206 1.012.573 1.377.367.366.865.57 1.384.57H40.26a1.96 1.96 0 0 0 1.383-.57c.367-.365.573-.86.573-1.377v-3.896a1.932 1.932 0 0 0-.573-1.377l-3.34-3.326Zm0 6.65H10.913v-1.142l3.34-3.325a1.939 1.939 0 0 0 .573-1.377v-7.793c0-5.37 4.389-9.74 9.783-9.74 5.394 0 9.782 4.37 9.782 9.74v7.793c0 .518.206 1.013.574 1.377l3.34 3.325v1.142ZM24.61 45a5.847 5.847 0 0 0 3.381-1.071 5.807 5.807 0 0 0 2.132-2.825H19.095a5.807 5.807 0 0 0 2.132 2.825A5.847 5.847 0 0 0 24.609 45Z"
        fill="#440298"
      />
    </g>
    <defs>
      <filter
        id="a"
        x={23.477}
        y={0}
        width={43.739}
        height={39.714}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={7} />
        <feGaussianBlur stdDeviation={3.5} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1202_214"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_1202_214"
          result="shape"
        />
      </filter>
      <filter
        id="b"
        x={0}
        y={6.039}
        width={49.218}
        height={52.961}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={7} />
        <feGaussianBlur stdDeviation={3.5} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1202_214"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_1202_214"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)

export default LogoNavbar
