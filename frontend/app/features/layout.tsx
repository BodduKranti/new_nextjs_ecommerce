import { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
    title: "S-Shopping - Features",
    description: "Generated by create next app",
};
const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            {children}
        </>
    )
}

export default layout
