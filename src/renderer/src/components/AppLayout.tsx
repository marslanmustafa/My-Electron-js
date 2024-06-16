import { ComponentProps, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export const RootLayout: React.FC = ({ children, className, ...props }: ComponentProps<'main'>) => {
  return (
    <main className={twMerge('bg-background flex flex-row h-screen', className)} {...props}>
      {children}
    </main>
  )
}

export const Sidebar: React.FC = ({ className, children, ...props }: ComponentProps<'aside'>) => {
  return (
    <aside className={twMerge('w-[250px] h-screen overflow-auto p-2', className)} {...props}>
      {children}
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
