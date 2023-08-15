import React from 'react'

const List = (props) => {
  return (
    <>
    <div
      class="mt-8 pointer-events-auto mx-auto mb-4 hidden w-96 max-w-full rounded-lg bg-primary-100 bg-clip-padding text-sm text-primary-700 shadow-lg shadow-black/5 data-[te-toast-show]:block data-[te-toast-hide]:hidden"
      id="static-example"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      data-te-autohide="false"
      data-te-toast-init
      data-te-toast-show>
      <div
        class="flex items-center justify-between rounded-t-lg border-b-2 border-primary-200 bg-primary-100 bg-clip-padding px-4 pb-2 pt-2.5 text-primary-700">
        <p class="flex items-center font-bold text-primary-700">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="info-circle"
            class="mr-2 h-4 w-4 fill-current"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512">
            <path
              fill="currentColor"
              d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path>
          </svg>
          Aisle {props.aisle_no}
        </p>
      </div>
      <div
        class="break-words rounded-b-lg bg-primary-100 px-4 py-4 text-primary-700">
        Customer needs assistance at aisle {props.aisle_no}
      </div>
    </div>
    
    </>
  )
}

export default List