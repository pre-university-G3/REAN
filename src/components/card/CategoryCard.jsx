import React from 'react'

export default function CategoryCard(props) {
    const {id, title, icon} = props;
  return (
    <div className="flex gap-3 shadow-sm w-40 flex-shrink-0 p-2 rounded-md">
      <img className="w-6" src={icon} />
      <span className="text-sm">
        <h3>{title}</h3>
      </span>
    </div>
  )
}
