import { v4 as uuid } from 'uuid'

export const mockData = () => {
  return [
    {
      id: uuid(),
      title: 'Praesent maximus purus',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id: uuid(),
      title: 'Sed sit amet',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id: uuid(),
      title: 'Phasellus eget lorem',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
  ]
}