'use client'

import React, { useTransition } from 'react'
import { Button } from './button'
import { useRouter } from 'next/navigation';

export default function NewDocumentButton() {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    const handleCreateNewDocument = () => {
        console.log("Creating New Document")
        startTransition(async () => {
            const { docId } = await createNewDocument();
            router.push(`/doc/${docId}`)
        });
    };

    return (
        <Button onClick={handleCreateNewDocument} disabled={!isPending}>
            {isPending ? "Creating ..." : "New Document"}
        </Button>
    )
}

