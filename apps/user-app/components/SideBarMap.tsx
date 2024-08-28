"use client"
import React from 'react'
import SideBar from './SideBar'
import { FaIndianRupeeSign } from 'react-icons/fa6'
import { BiTransferAlt } from "react-icons/bi";
import { MdHomeFilled } from "react-icons/md";
import { MdArrowOutward } from "react-icons/md";

export default function SideBarMap() {
    return (
        <div className='flex flex-col gap-4 '>
            <SideBar Icon={MdHomeFilled} href='/dashboard' title='Home' />
            <SideBar Icon={FaIndianRupeeSign} href='/transactions' title='Transactions' />
            <SideBar Icon={BiTransferAlt} href='/transfers' title='Transfers' />
            <SideBar Icon={MdArrowOutward} href='/p2p' title='P2PTransfers' />
        </div>
    )
}
