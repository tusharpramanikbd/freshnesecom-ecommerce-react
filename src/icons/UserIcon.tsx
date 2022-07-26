import CustomIconType from '../@types/CustomIconType'

const UserIcon: React.FC<CustomIconType> = ({
  color,
  style,
}: CustomIconType) => {
  return (
    <svg
      width='22'
      height='24'
      viewBox='0 0 22 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={style && { ...style }}
    >
      <path
        d='M2 21.9999L2.79 19.1199C5.4 9.6199 16.6 9.6199 19.21 19.1199L20 21.9999'
        stroke={color || '#151515'}
        strokeWidth='2.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M11 11.98C13.7614 11.98 16 9.74141 16 6.97998C16 4.21856 13.7614 1.97998 11 1.97998C8.23858 1.97998 6 4.21856 6 6.97998C6 9.74141 8.23858 11.98 11 11.98Z'
        stroke={color || '#151515'}
        strokeWidth='2.5'
        strokeLinecap='round'
        strokeLinejoin='bevel'
      />
    </svg>
  )
}

export default UserIcon
