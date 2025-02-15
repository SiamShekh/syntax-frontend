"use client";

import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import { getCurrentUser } from "./getCurrentUser";
import { payloadUser } from "@/middleware";

interface val {
    user: payloadUser | undefined
    loading: boolean
    setLoading: Dispatch<SetStateAction<boolean>>
}

export const SyntaxProvider = createContext<undefined | val>(undefined);
function Context({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<payloadUser | undefined>(undefined);
    const [loading, setLoading] = useState(true);

    const handleUser = async () => {
        const init = await getCurrentUser();
        setUser(init);
        setLoading(false);
    }

    useEffect(() => {
        handleUser();
    }, [loading]);

    return <SyntaxProvider.Provider value={{ user, loading, setLoading }}>
        {children}
    </SyntaxProvider.Provider>
}

export default Context;