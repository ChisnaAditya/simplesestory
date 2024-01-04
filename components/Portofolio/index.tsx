import Image from "next/image";

export default function Portfolio() {
    return (
        <div id="portfolio" className="max-w-[1240px] mx-auto py-16 text-center">
            <h1 className="font-bold text-5xl p-4">MY PROJECTS</h1>
            <div className="grid grid-rows-none md:grid-cols-5 p-4 gap-4">
                <div className="w-full h-full col-span-2 md:col-span-3 row-span-2">
                    <Image
                        src="https://images.unsplash.com/photo-1550005809-91ad75fb315f?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="/"
                        layout="responsive"
                        width="677"
                        height="451"
                    />
                </div>
                <div className="w-full h-full">
                    <Image
                        src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="/"
                        width="315"
                        height="317"
                        layout="responsive"
                        objectFit="cover"
                    />
                </div>
                <div className="w-full h-full">
                    <Image
                        src="https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="/"
                        width="315"
                        height="317"
                        layout="responsive"
                        objectFit="cover"
                    />
                </div>
                <div className="w-full h-full">
                    <Image
                        src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="/"
                        width="215"
                        height="217"
                        layout="responsive"
                        objectFit="cover"
                    />
                </div>
                <div className="w-full h-full">
                    <Image
                        src="https://images.unsplash.com/photo-1509927083803-4bd519298ac4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="/"
                        width="215"
                        height="217"
                        layout="responsive"
                        objectFit="cover"
                    />
                </div>


                <div className="w-full h-full">
                    <Image
                        src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="/"
                        width="215"
                        height="217"
                        layout="responsive"
                        objectFit="cover"
                    />
                </div>
                <div className="w-full h-full">
                    <Image
                        src="https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="/"
                        width="215"
                        height="217"
                        layout="responsive"
                        objectFit="cover"
                    />
                </div>
                <div className="w-full h-full">
                    <Image
                        src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="/"
                        width="215"
                        height="217"
                        layout="responsive"
                        objectFit="cover"
                    />
                </div>
                <div className="w-full h-full">
                    <Image
                        src="https://images.unsplash.com/photo-1509927083803-4bd519298ac4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="/"
                        width="215"
                        height="217"
                        layout="responsive"
                        objectFit="cover"
                    />
                </div>
                <div className="w-full h-full">
                    <Image
                        src="https://images.unsplash.com/photo-1550005809-91ad75fb315f?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="/"
                        width="215"
                        height="217"
                        layout="responsive"
                        objectFit="cover"
                    />
                </div>
            </div>
        </div>
    )
}