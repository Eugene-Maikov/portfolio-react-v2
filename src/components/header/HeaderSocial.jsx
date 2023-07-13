import React from 'react';
import {BsTelegram, BsGithub} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className="header__social">
      <a href="https://t.me/eugene_maikov2000" target="_blank"><BsTelegram /></a>
      <a href="https://github.com/Eugene-Maikov" target="_blank"><BsGithub /></a>
    </div>
  )
}

export default HeaderSocial