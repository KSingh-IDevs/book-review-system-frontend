'use client'
import Header from '@/components/Header';
import { useGlobalStates } from '@/store';
import { Box, Section, Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';


export default function Home() {
  const { theme } = useGlobalStates()
  return (
    <Theme accentColor="crimson" grayColor="olive" panelBackground='solid' radius="large" scaling="95%" appearance={theme ? 'light' : "dark"}>
      <main className="flex min-h-screen flex-col  dark:bg-slate-800">
        <Header />
        <Box>
          <div className='py-4 sm:px-10 px-2'>
            <p><strong>hii</strong></p>
          </div>
        </Box>
      </main>
    </Theme>
  )
}
