import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { NavbarSearch } from '../comps/HomePage';

const Home: NextPage = () => {
  return <div>
    <NavbarSearch />
  </div>
}

export default Home
