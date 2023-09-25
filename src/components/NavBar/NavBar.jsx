import React, { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import style from './NavBar.module.css';
import { AiFillHome } from 'react-icons/ai';
import { RiMovie2Fill } from 'react-icons/ri';

export function NavBar() {
  return (
    <div>
      <nav className={style.navbar}>
        <Link className={style.nav_link} to="/">
          <AiFillHome className={style.icon} />
          Home
        </Link>
        <Link className={style.nav_link} to="/movies">
          <RiMovie2Fill className={style.icon} />
          Movies
        </Link>
      </nav>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}