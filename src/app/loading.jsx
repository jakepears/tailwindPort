'use client';
import React, { useEffect, useState } from "react";
import Loader from "@/Components/Loader/loader";

export default function loading() {
    const [showLoader, setShowLoader] = useState(true);
    useEffect(() => {
    const delay = 4000
    const timeout = setTimeout(() => {
        setShowLoader(false);
    }, delay);
    return () => clearTimeout(timeout);

    if (showLoader) {
        return <Loader />;
    }
}, []);
}
