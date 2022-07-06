import React from 'react'
import logo from '../asset/logo.svg'

const Navbar = () => {
  return (
    <div class="navbar px-10 py-6 fixed bg-gradient-to-b from-[#080809] to-[#080809]/50">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><a href='/'>Item 1</a></li>
            <li tabindex="0">
              <a class="justify-between">
                Parent
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
              </a>
              <ul class="p-2">
                <li><a href='/'>Submenu 1</a></li>
                <li><a href='/'>Submenu 2</a></li>
              </ul>
            </li>
            <li><a href='/'>Item 3</a></li>
          </ul>
        </div>
        <a href="/">
          <img src={logo} alt='logo' />
        </a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
          <li><a href='/'>ABOUT</a></li>
          <li><a href='/'>STORE</a></li>
          <li><a href='/'>GAMEBOX</a></li>
          <li><a href='/'>TOKEN</a></li>
          <li><a href='/'>STAKING</a></li>
          <li><a href='/'>DOCS</a></li>
        </ul>
      </div>
      <div class="navbar-end">
        <a class='btn btn-outline mr-4'>REGISTER</a>
        <a class="btn btn-primary">LOGIN</a>
      </div>
    </div>
  )
}

export default Navbar