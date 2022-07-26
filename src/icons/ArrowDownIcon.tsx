import CustomIconType from '../@types/CustomIconType'

const ArrowDownIcon: React.FC<CustomIconType> = ({
  color,
  style,
}: CustomIconType) => {
  return (
    <svg
      width='12'
      height='13'
      viewBox='0 0 12 13'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={style && { ...style }}
    >
      <path
        d='M3.61035 5.40001L5.66535 7.45501C5.75903 7.54814 5.88576 7.60041 6.01785 7.60041C6.14994 7.60041 6.27667 7.54814 6.37035 7.45501L8.37035 5.45501'
        stroke={color || '#6A983C'}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='bevel'
      />
    </svg>
  )
}

export default ArrowDownIcon
