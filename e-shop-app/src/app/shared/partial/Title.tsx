import { ITitle } from '../interfaces/title';

export const TitleProduct = ({ title, hasButton }: ITitle) => {
  return (
    <div className={hasButton ? 'product-header header-link':'product-header'}>
      <h3 className='product title'>{title}</h3>
      {hasButton && <a className='btn btn-secondary btn-show' href='#'>Show More</a>}
    </div>
  )
}
