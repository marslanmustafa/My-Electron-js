// @ts-nocheck
import { ActionButton, ActionButtonProps } from '../../components'
import { createEmptyNoteAtom } from '../../store'
import { useSetAtom } from 'jotai'
import { FilePenLine } from 'lucide-react'

export const NewNoteButton: React.FC = ({ ...props }: ActionButtonProps) => {
  const createEmptyNote = useSetAtom(createEmptyNoteAtom)

  const handleCreation: Promise<void> = async () => {
    await createEmptyNote()
  }

  return (
    <ActionButton onClick={handleCreation} {...props}>
      <FilePenLine className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}
