import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

const themeAtom = atomWithStorage('theme', 0)

export function useGlobalStates() {
    const [theme, setTheme] = useAtom(themeAtom)

    const states = {
        theme,
        setTheme
    }


    return states
}