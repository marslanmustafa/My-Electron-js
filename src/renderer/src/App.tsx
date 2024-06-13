import React from 'react'
import { RootLayout, Sidebar, Content, DraggableTopBar } from './components'

const App: React.FC = () => {
  return (
    <>
      <DraggableTopBar />
      <RootLayout>
        <Sidebar className="p-2">
          {/* <ActionButtonsRow className="flex justify-between mt-1" /> */}
          {/* <NotePreviewList className="mt-3 space-y-1" onSelect={resetScroll} /> */}
        </Sidebar>

        <Content className="border-l bg-zinc-900/50 border-l-white/20">
          {/* <FloatingNoteTitle className="pt-2" /> */}
          {/* <MarkdownEditor /> */}
        </Content>
      </RootLayout>
    </>
  )
}

export default App
