"use client"
import { SearchManufacturerProps } from '@/types'
import {Comobobox, Transition} from '@headlessui/react'
import React from 'react'

const SearchManufacturer = ({manufacturer,setManufacturer}:SearchManufacturerProps) => {
  return (
    <div className='search-manufacturer'>
        <Comobobox>
            <div className='relative w-full'>
            <Comobobox.Button>
                
            </Comobobox.Button>
            </div>
        </Comobobox>
    </div>
  )
}

export default SearchManufacturer