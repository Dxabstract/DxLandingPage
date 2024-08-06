import React from 'react'

function ItemBadge({ text, color }) {
    return (
      <div
        className="border-[1px] p-[5px] rounded-roundedBTN2 text-default text-badge text-center"
        style={{ borderColor: color, color: color }}
      >
        {text}
      </div>
    );
  }

export default ItemBadge