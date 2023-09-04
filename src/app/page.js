import Header from '@/components/Header';
import { useGlobalStates } from '@/store';
import { Box, Section, Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';


export default function Home() {
  const { theme } = useGlobalStates()
  console.log("theme", theme)
  return (
    <Theme accentColor="crimson" grayColor="sand" radius="large" scaling="95%" appearance={theme === 'light' ? 'light' : "dark"}>
      <main className="flex min-h-screen flex-col  dark:bg-slate-800">
        <Header />
        <Box>
          <div class='py-4 sm:px-10 px-5'>
            <p><strong>hii</strong></p>
          </div>
        </Box>
      </main>
    </Theme>
  )
}
