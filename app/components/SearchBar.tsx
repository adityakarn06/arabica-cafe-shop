import { Search } from "lucide-react"

export default function Searchbar() {
    return (
        <div className="flex max-w-md">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search Store"
                  className="w-full pl-10 pr-4 py-3 border border-stone-300 text-stone-800 rounded-l-md focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-transparent"
                />
              </div>
              <button className="bg-stone-800 text-white px-6 py-3 rounded-r-md hover:bg-stone-900 transition-colors font-medium">
                Search
              </button>
            </div>
    )
}