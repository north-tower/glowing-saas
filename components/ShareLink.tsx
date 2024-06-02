import React, { Dispatch, SetStateAction } from 'react'

function ShareLink({
    isOpen, chatId, setIsOpen
}: {
    isOpen: boolean, chatId: string, setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div>ShareLink</div>
  )
}

export default ShareLink