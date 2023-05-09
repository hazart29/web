export default function Header() {
    return (
        <header className="fixed w-full bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt=""/>
                    </a>
                </div>
                
                <div className="flex gap-4 lg:gap-x-12">
                    <a href="#feature" className="text-sm font-semibold leading-6 text-gray-900">Features</a>
                    <a href="#pricelist" className="text-sm font-semibold leading-6 text-gray-900">Pricelist</a>
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Tentang</a>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Order <span aria-hidden="true">&rarr;</span></a>
                </div>
            </nav>

        </header>

    )
}