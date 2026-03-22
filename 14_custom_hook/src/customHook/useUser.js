import { useEffect, useState } from 'react'

const useUser = () => {

    const [isOnline, setIsOnline] = useState(false);

    useEffect(() => {
        window.addEventListener('online', () => setIsOnline(true));
        window.addEventListener('offline', () => setIsOnline(false));
    }, [])

    return isOnline;

}

export default useUser;
