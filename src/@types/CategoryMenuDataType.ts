import CategorySubMenuDataType from './CategorySubMenuDataType'

interface CategoryDataType {
  id: string
  menu: string
  link: string
  subMenus: CategorySubMenuDataType[]
}

export default CategoryDataType
