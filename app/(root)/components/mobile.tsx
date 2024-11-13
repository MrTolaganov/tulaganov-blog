'use client'

import { Button } from '@/components/ui/button'
import { DrawerClose } from '@/components/ui/drawer'
import { Separator } from '@/components/ui/separator'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { navLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Mobile() {
  const pathname = usePathname()

  return (
    <Sheet>
      <SheetTrigger asChild className='flex md:hidden'>
        <Button size={'icon'} variant={'ghost'}>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side={'left'}>
        <Link href={'/'}>
          <DrawerClose>
            <SheetTitle className='text-4xl font-crete-round'>Tulaganov</SheetTitle>
          </DrawerClose>
        </Link>
        <Separator className='my-3' />
        <div className='flex flex-col space-y-3'>
          {navLinks.map(({ name, route, icon: Icon }) => (
            <Link key={name} href={route}>
              <SheetClose
                className={cn(
                  'w-full hover:bg-blue-400/20 px-3 py-2 cursor-pointer rounded-sm transition-colors flex items-center gap-2',
                  route === pathname && 'text-blue-400 bg-blue-400/20'
                )}
              >
                <Icon className='size-5' />
                <SheetDescription
                  className={cn(route === pathname ? 'text-blue-400' : 'text-foreground')}
                >
                  {name}
                </SheetDescription>
              </SheetClose>
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}
