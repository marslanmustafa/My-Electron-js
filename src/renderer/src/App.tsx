// @ts-nocheck
import {
  Content,
  TopBar,
  FloatingNoteTitle,
  MarkdownEditor,
  RootLayout,
  Sidebar
} from './components'
import { useRef } from 'react'

const App: React.FC = () => {
  const contentContainerRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <TopBar />
      <RootLayout>
        <Sidebar />
        <Content ref={contentContainerRef} className="border-l bg-zinc-900/50 border-l-white/20">
          <FloatingNoteTitle className="pt-2" />
          <MarkdownEditor />
        </Content>
      </RootLayout>
    </>
  )
}

export default App
