import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@radix-ui/react-select"

export const DropdownButton = () => {

    const handleOptionChange = (value: string) => {
        console.log(`Selected value: ${value}`)
        // Implement any additional logic here
    }

    return (
        <div className="mt-2 flex w-full justify-center md:mt-0">
            <Select onValueChange={handleOptionChange}>
                <SelectTrigger className="flex h-8 w-full items-center justify-between rounded-[10px] bg-gray-300 px-2 text-left text-sm text-gray-900 ring-0 focus:ring-0 dark:bg-[#343434] dark:text-gray-400">
                    <SelectValue placeholder="test" />
                </SelectTrigger>
                <SelectContent
                    id="dropdown"
                    className="z-10 w-full rounded-[10px] bg-gray-100 shadow dark:bg-[#343434]"
                >
                    <SelectGroup>
                        <SelectItem
                            value="totalWatched"
                            className="block w-full cursor-pointer px-7 py-2 text-sm text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                            style={{ position: 'relative' }}
                        >
                            test
                        </SelectItem>
                        <SelectItem
                            value="publishedDate"
                            className="block w-full cursor-pointer px-7 py-2 text-sm text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                            style={{ position: 'relative' }}
                        >
                            test
                        </SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}

export default DropdownButton;