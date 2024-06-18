// @ts-nocheck
import { ActionButton, ActionButtonProps } from '../../components'
import { deleteNoteAtom } from '../../store'
import { useSetAtom } from 'jotai'
import { LucideTrash2 } from 'lucide-react'

export const DeleteNoteButton = ({ ...props }: ActionButtonProps) => {
  const deleteNote = useSetAtom(deleteNoteAtom)

  const handleDelete = async () => {
    await deleteNote()
  }

  return (
    <ActionButton onClick={handleDelete} {...props}>
      <LucideTrash2 className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}
