import React from 'react'
import { RootLayout, Sidebar, Content, TopBar } from './components'

const App: React.FC = () => {
  return (
    <>
      <TopBar />
      <RootLayout>
        <Sidebar >
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
