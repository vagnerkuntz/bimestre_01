import React from 'react'
import { Item } from '../Item'

export function List ({ data}) {
  return data?.map((item, index) => <Item
      key={index}
      name={item.name}
      description={item.description}
      htmlUrl={item.html_url}
    />
  )
}
