import { useEffect } from 'react'
import Logo from '../../../client/clientComponents/Logo'
import Link from './Link'
import Button from './Button'

/**
 * This function helps open and close the navbar with button and click outside to close
 */
function navOpenFunc(navBtn: HTMLElement, navBtnClose: HTMLElement, nav: HTMLElement) {
    navBtn.addEventListener('click', () => {
        if(nav.classList.contains("invisible")) {
            open()
        } else {
            close()
        }
    })

    navBtnClose.addEventListener('click', () => {
        if(nav.classList.contains("invisible")) {
            close()
        } else {
            open()
        }
    })

    window.addEventListener('click', e => {
        const target = e.target as HTMLElement
        if(navBtn.contains(target) || navBtn === target) return

        const isClickInside = nav.contains(target) || target === nav

        if(!isClickInside) {
            close()
        }
    })

    function open() {
        nav.classList.remove('invisible')
        navBtnClose.classList.remove('hidden')
        navBtn.classList.add('hidden')
    }

    function close() {
        nav.classList.add('invisible')
        navBtnClose.classList.add('hidden')
        navBtn.classList.remove('hidden')
    }
}

const NavBar = () => {
    useEffect(() => {
        const navBtn = document.getElementById("navBtn")
        const navBtnClose = document.getElementById("navBtnClose")
        const nav = document.getElementById("nav")
        if(!navBtn || !nav || !navBtnClose) return
        navOpenFunc(navBtn, navBtnClose, nav)
    }, [])

  return (
    <div className='rounded-3xl w-full'>
        <div className="w-full hidden lg:flex flex-row justify-between p-[20px] bg-white">
            <div className="w-[200px]"><Logo /></div>
            <div className="flex flex-row gap-5 justify-start items-center flex-1 px-10">
                <Link />
            </div>
            <div className="flex flex-row gap-2 items-center">
                <Button />
            </div>
        </div>
        <div className="flex flex-col relative lg:hidden">
            <div className="w-full flex flex-row justify-between p-[10px] bg-white">
                <div className="w-[200px]"><Logo /></div>
                <div className="flex flex-col items-start justify-center text-[30px] cursor-pointer transition-all" id="navBtn"><i className="fa-solid fa-bars"></i></div>
                <div className="flex-col items-start justify-center text-[30px] cursor-pointer transition-all hidden" id="navBtnClose"><i className="fa-solid fa-circle-xmark"></i></div>
            </div>
            <div className="bg-white p-5 rounded-[30px] absolute top-[110%] left-0 w-full z-[99] invisible" id="nav">
                <div className="flex flex-col gap-5 justify-start items-center flex-1 px-10">
                    <Link />
                </div>
                <div className="flex flex-row gap-2 justify-center py-5">
                    <Button />
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar
