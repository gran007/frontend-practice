import style from './style.module.css';
import Image from 'next/image';
import Link from 'next/link';

type menuItemType = {
  name: string;
  url: string;
}

const menuItem: menuItemType[] = [
  { name: '코스', url: '/course' },
  { name: '커뮤니티', url: '/community' },
  { name: 'FAQ', url: '/faq' },
  { name: '리뷰', url: '/reivew' },
]

export default function Home({}) {
  return (
    <div className={style.main}>
      <nav className={style.nav}>
        <div className={style.menuBar}>
          <div className={style.logo}>
            <Image className={style.logoImg}
              src='/vercel.svg' alt='logo img'
              width={30} height={30}
            />
            <div className={style.siteName}>
              Coding Club
            </div>
          </div>
          <div className={style.menuItems}>
            {
              menuItem.map(({name, url}, index) => {
                return (
                  <Link
                    key={index}
                    className={style.menuItem}
                    href={url}>{name}
                  </Link>
                )
              })
            }
          </div>
          <div className={style.buttonRow}>
            <div 
              className={`${style.button} ${style.loginButton}`}>Login</div>  
            <div 
              className={`${style.button} ${style.joinButton}`}>Join</div>  
          </div>
        </div>
      </nav>
    </div>
  );
}