// @ts-nocheck
import { ComponentProps, forwardRef, useRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { NotePreviewList } from './NotePreviewList'
import { ActionButtonsRow } from './ActionButtonsRow'
const contentContainerRef = useRef<HTMLDivElement>(null)

export const RootLayout: React.FC = ({ children, className, ...props }: ComponentProps<'main'>) => {
  return (
    <main
      className={twMerge('bg-background flex flex-row h-[calc(100vh-32px)] mt-8', className)}
      {...props}
    >
      {children}
    </main>
  )
}

export const Sidebar: React.FC = ({ className, ...props }: ComponentProps<'aside'>) => {
  const resetScroll = () => {
    contentContainerRef.current?.scrollTo(0, 0)
  }
  return (
    <aside className={twMerge('w-[250px] h-full overflow-auto p-2', className)} {...props}>
      <ActionButtonsRow />
      <NotePreviewList onSelect={resetScroll} />
    </aside>
  )
}

export const Content = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  ({ children, className, ...props }, ref) => (
    <div ref={ref} className={twMerge('flex-1 overflow-auto', className)} {...props}>
      {children}
    </div>
  )
)

Content.displayName = 'Content'
