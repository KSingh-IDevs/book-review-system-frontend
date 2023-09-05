'use client'
import { useGlobalStates } from "@/store"
import { LightningBoltIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { Button, Dialog, Flex, IconButton, Text, TextField } from "@radix-ui/themes"
import Link from "next/link"

const Header = () => {
    const { setTheme, theme } = useGlobalStates()
    const toggleDarkMode = () => setTheme(!theme)

    return (
        <nav className="navbar navbar-expand-lg fixed-top py-3 sm:px-10 px-2 shadow-sm shadow-pink-300">
            <div className="flex flex-row justify-between items-center">
                <Link href="/" className="text-pink-600 dark:text-pink-50 font-semibold  hover:text-pink-500">Book Review System</Link>
                <Flex justify="center" align="center" gap={"3"} wrap="nowrap">
                    {/* <Link href={"/signin"} className="bg-pink-600 text-white py-2 px-4 rounded-full hover:bg-pink-500" >Sign in</Link> */}
                    <Dialog.Root>
                        <Dialog.Trigger>
                            <Button size="2" >Sign in</Button>
                        </Dialog.Trigger>

                        <Dialog.Content style={{ maxWidth: 450 }} className="mx-2">
                            <Dialog.Title>Sign in</Dialog.Title>
                            <Dialog.Description size="2" mb="4">
                            </Dialog.Description>

                            <Flex direction="column" gap="3">
                                <label>
                                    <Text as="div" size="2" mb="1" weight="bold">
                                        Email
                                    </Text>
                                    <TextField.Input
                                        size="3"
                                        placeholder="Enter your email"
                                    />
                                </label>
                                <label>
                                    <Text as="div" size="2" mb="1" weight="bold">
                                        Password
                                    </Text>
                                    <TextField.Input
                                        type="password"
                                        size="3"
                                        placeholder="Enter your password"
                                    />
                                </label>
                            </Flex>

                            <Flex gap="3" mt="4" justify="end">
                                <Dialog.Close>
                                    <Button variant="soft" color="gray">
                                        Cancel
                                    </Button>
                                </Dialog.Close>
                                <Dialog.Close>
                                    <Button  onClick={() => console.log("clicked save")}>Save</Button>
                                </Dialog.Close>
                            </Flex>
                        </Dialog.Content>
                    </Dialog.Root>
                    <IconButton variant="ghost" className="bg-none" onClick={toggleDarkMode} >
                        {
                            theme ? <SunIcon /> : <MoonIcon />
                        }
                    </IconButton>
                </Flex>
            </div>
        </nav>
    )
}


export default Header