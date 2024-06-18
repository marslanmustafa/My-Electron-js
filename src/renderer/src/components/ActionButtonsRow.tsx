import { DeleteNoteButton, NewNoteButton } from './index'
import { ComponentProps } from 'react'

export const ActionButtonsRow: React.FC = ({ ...props }: ComponentProps<'div'>) => {
  return (
    <div {...props} className="flex justify-between mt-1">
      <NewNoteButton />
      <DeleteNoteButton />
    </div>
  )
}
