"use client"

import { FinbroLogo } from "@/components/finbroLogo"
import { Menu, Settings2, LogOut } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MobileNav } from "@/components/sidebar"

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between p-6 bg-black/10 backdrop-blur-[120px]">
      <div className="flex items-center gap-3">
        <Sheet>
          <SheetTrigger asChild>
            <button className="md:hidden h-10 w-10 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center border border-[#2A2A2A] hover:border-[#3A3A3A] transition-colors">
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-[#0D0D0D] border-[#1F1F1F] text-white p-6">
            <div className="flex items-center justify-between">
              <FinbroLogo className="text-white h-6 w-auto" />
            </div>
            <div className="mt-6">
              <MobileNav />
            </div>
          </SheetContent>
        </Sheet>
        <FinbroLogo className="text-white h-8 w-auto" />
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="h-10 w-10 rounded-full bg-gradient-to-br from-pink-500 to-orange-400 hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-white/20" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48 bg-[#0D0D0D] border-[#1F1F1F] text-white">
          <DropdownMenuItem className="focus:bg-[#1F1F1F] focus:text-white cursor-pointer text-[#919191]">
            <Settings2 className="mr-2 h-4 w-4 text-[#919191]" />
            <span>Settings</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="focus:bg-[#1F1F1F] focus:text-white cursor-pointer text-[#919191]">
            <LogOut className="mr-2 h-4 w-4 text-[#919191]" />
            <span>Logout</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  )
}
