import CustomIconType from '../@types/CustomIconType'

const SearchIcon: React.FC<CustomIconType> = ({
  color,
  style,
}: CustomIconType) => {
  return (
    <svg
      width='14'
      height='14'
      viewBox='0 0 14 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={style && { ...style }}
    >
      <path
        d='M8.19303 10.4333C10.7704 10.4333 12.8597 8.34394 12.8597 5.76661C12.8597 3.18928 10.7704 1.09995 8.19303 1.09995C5.61571 1.09995 3.52637 3.18928 3.52637 5.76661C3.52637 8.34394 5.61571 10.4333 8.19303 10.4333Z'
        stroke={color || '#151515'}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='bevel'
      />
      <path
        d='M4.81319 9.24002L1.68652 12.3667'
        stroke={color || '#151515'}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='bevel'
      />
    </svg>
  )
}

export default SearchIcon
