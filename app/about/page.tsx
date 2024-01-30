import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'SIMPLESESTORY',
    description: 'Welcome to SIMPLESESTORY, where dreams unfold and love stories blossom. At our core, we are passionate storytellers, dedicated to bringing your unique love narrative to life.',
}

export default function About() {
    return (
        <div className="container h-screen flex flex-col items-center justify-center">
            <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
                About
            </h1>
            <p className="text-lg">We are a small passionate team.</p>
            <div className="grid grid-cols-3 gap-10 md:w-2/3 p-10">
                <Image
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="/"
                    width="500"
                    height="500"
                    className="rounded"
                    layout="responsive"
                />
                <Image
                    src="https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="/"
                    width="500"
                    height="500"
                    className="rounded"
                    layout="responsive"
                />
                <Image
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="/"
                    width="500"
                    height="500"
                    className="rounded"
                    layout="responsive"
                />
            </div>
            <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde libero totam quae sit! Necessitatibus quos eaque recusandae sed id qui in assumenda nesciunt nobis ab quas consequatur, laborum laboriosam nulla!</p>
        </div>
    )
}