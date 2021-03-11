import useLocalStorage from './useLocalStorage'

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage("turnedOn", false)
    return [darkMode, setDarkMode]
}

export default useDarkMode;