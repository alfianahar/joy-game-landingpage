import React from 'react'
import logo from '../asset/logo.svg'
import twitter from '../asset/twitter.svg'
import medium from '../asset/medium.svg'
import discord from '../asset/discord.svg'
import telegram from '../asset/telegram.svg'
import github from '../asset/github.svg'

const Footer = () => {
  return (
    <footer class="flex flex-col p-10 bg-black text-white">
      <div className='footer'>
        <div>
          <img src={logo} alt='logo' />
          <p>METAVERSE GAMING <br /> BY JOY GAME PLAYER  </p>
        </div>
        <div>
          <span class="footer-title">Our Services</span>
          <a class="link link-hover py-2">About</a>
          <a class="link link-hover py-2">Store</a>
          <a class="link link-hover py-2">Gamebox</a>
          <a class="link link-hover py-2">Token</a>
          <a class="link link-hover py-2">Staking</a>
          <a class="link link-hover py-2">Docs</a>
        </div>
        <div>
          <span class="footer-title">Help</span>
          <a class="link link-hover py-2">Help</a>
          <a class="link link-hover py-2">FAQs</a>
          <a class="link link-hover py-2">Contact</a>
        </div>
        <div>
          <span class="footer-title">Join Our Community</span>
          <div class="grid grid-flow-col gap-5 place-items-center mt-2">
            <a><img src={twitter} alt="twitter" /></a>
            <a><img src={medium} alt="medium" /></a>
            <a><img src={discord} alt="discord" /></a>
            <a><img src={telegram} alt="telegram" /></a>
            <a><img src={github} alt="github" /></a>
          </div>
        </div>
      </div>
      <div className='flex flex-row w-full justify-center mt-12 -mb-5'>
        <p classname='w-full'>
          <a class="link link-hover py-2">@ 2022 Joy Game   </a>
          |
          <a class="link link-hover py-2">  Terms & condition  </a>
          |
          <a class="link link-hover py-2">   Privacy Policy</a>

        </p>
      </div>
    </footer>
  )
}

export default Footer