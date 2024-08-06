import React from 'react'

function ItemBadge({ text, color }) {
    return (
      <div
        className="  border-[1px] py-[5px] px-[12px] rounded-roundedBTN2 text-[10px] lg:text-badge text-center font-montserrat text-nowrap"
        style={{ borderColor: color, color: color }}
      >
        {text}
      </div>
    );
  }

export default ItemBadge